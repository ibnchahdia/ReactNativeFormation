import 'react-native-gesture-handler'; // Must be at the top
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// Redux imports
import { Provider } from 'react-redux';
import store from './redux/store'; // Adjust the path if necessary

// Import your navigators
import StackNavigator from './navigation/StackNavigator';

// Import AuthProvider (from Context API)
import { AuthProvider } from './context/AuthContext'; // Adjust the path as necessary

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AuthProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </AuthProvider>
      </Provider>
    </GestureHandlerRootView>
  );
}