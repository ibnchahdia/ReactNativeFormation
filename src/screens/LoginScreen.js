import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState('emilys'); // Default value for testing
  const [password, setPassword] = useState('emilyspass'); // Default value for testing
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password.');
      return;
    }

    setLoading(true);

    const result = await login(username, password);

    setLoading(false);

    if (result.success) {
      // Navigation to main app is handled by AuthContext and StackNavigator
      // Optionally, you can remove the success alert for a smoother experience
      // Alert.alert('Success', 'Logged in successfully!');
    } else {
      Alert.alert('Login Failed', result.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <Button title="Login" onPress={handleLogin} color="#007AFF" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 40,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#007AFF',
  },
  input: {
    height: 50,
    borderColor: '#007AFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
  },
});
