import Reactotron, { networking } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__) {
  Reactotron
    .setAsyncStorageHandler(AsyncStorage)
    .configure({ name: 'My React Native App' }) // Customize the name as needed
    .useReactNative() // Adds all built-in React Native plugins
    .use(networking()) // Adds networking plugin
    .use(reactotronRedux()) // Integrates Redux with Reactotron
    .connect(); // Connects to the Reactotron app

  Reactotron.clear(); // Clears Reactotron logs on every app load

  // Optional: Override console.log and console.error for enhanced logging
  const originalConsoleLog = console.log;
  console.log = (...args) => {
    originalConsoleLog(...args);
    Reactotron.display({
      name: 'Console Log',
      value: args,
      preview:
        args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
    });
  };

  const originalConsoleError = console.error;
  console.error = (...args) => {
    originalConsoleError(...args);
    Reactotron.display({
      name: 'Console Error',
      value: args,
      preview:
        args.length > 0 && typeof args[0] === 'string' ? args[0] : null,
      important: true,
    });
  };

  Reactotron.log('Reactotron Configured Successfully!');
}

export default Reactotron;
