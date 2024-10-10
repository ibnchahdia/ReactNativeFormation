import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

function App(): React.JSX.Element {
  const [message, setMessage] = useState('');

  // Handlers for button presses
  const handleButtonPress = () => setMessage('Button pressed!');
  const handleTouchableOpacityPress = () => setMessage('TouchableOpacity pressed!');
  const handleTouchableHighlightPress = () => setMessage('TouchableHighlight pressed!');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native Button Example</Text>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <Button title="Press Me" onPress={handleButtonPress} />
      </View>

      {/* TouchableOpacity */}
      <TouchableOpacity style={styles.touchableOpacity} onPress={handleTouchableOpacityPress}>
        <Text style={styles.touchableText}>Press TouchableOpacity</Text>
      </TouchableOpacity>

      {/* TouchableHighlight */}
      <TouchableHighlight
        style={styles.touchableHighlight}
        onPress={handleTouchableHighlightPress}
        underlayColor="red" // This color is shown when the button is pressed
      >
        <Text style={styles.touchableText}>Press TouchableHighlight</Text>
      </TouchableHighlight>

      {/* Message */}
      <Text style={styles.message}>{message}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
    width: '100%',
  },
  touchableOpacity: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  touchableHighlight: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  touchableText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 30,
    fontSize: 18,
    color: '#333',
  },
});

export default App;
