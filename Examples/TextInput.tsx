import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

function App(): React.JSX.Element {
  const [text, setText] = useState(''); // State to store input text
  const [submittedText, setSubmittedText] = useState(''); // State to store submitted text

  // Handle text input changes
  const handleTextChange = (input: string) => {
    setText(input); // Update state with the typed input
  };

  // Handle button press
  const handlePress = () => {
    setSubmittedText(text); // Store the submitted text
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Text Input Example</Text>

      {/* TextInput with onChangeText */}
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        onChangeText={handleTextChange} // Update text state as user types
        value={text} // Bind the value to the state
      />

      {/* Button to submit the text */}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Display the submitted text */}
      {submittedText ? (
        <Text style={styles.resultText}>You submitted: {submittedText}</Text>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultText: {
    marginTop: 30,
    fontSize: 18,
    color: '#333',
  },
});

export default App;
