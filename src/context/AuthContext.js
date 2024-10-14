import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Config from "react-native-config";
import { LOGIN_API } from '../constants/endpoints';

// Create the AuthContext with default values
export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  token: null,
  login: async () => {},
  logout: async () => {},
});

// AuthProvider component to wrap around your app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  // Load token and user data from AsyncStorage on app start
  useEffect(() => {
    const loadAuthState = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        const storedUser = await AsyncStorage.getItem('user');

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log('Error loading auth state:', error);
      }
    };

    loadAuthState();
  }, []);

  // Login method
  const login = async (username, password) => {
    try {
      const response = await axios.post(Config.BASE_URL+LOGIN_API, {
        username,
        password,
        expiresInMins: 30, // Optional
      });

      if (response.status === 200) {
        const { accessToken, ...userData } = response.data;

        setToken(accessToken);
        setUser(userData);
        setIsAuthenticated(true);

        // Store token and user data in AsyncStorage
        await AsyncStorage.setItem('token', accessToken);
        await AsyncStorage.setItem('user', JSON.stringify(userData));

        return { success: true };
      } else {
        return { success: false, message: 'Login failed' };
      }
    } catch (error) {
      console.log('Login Error:', error);
      return { success: false, message: error.response?.data?.message || 'An error occurred' };
    }
  };

  // Logout method
  const logout = async () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);

    // Remove token and user data from AsyncStorage
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
