import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0); // useState to track count
  const [message, setMessage] = useState(''); // useState to store fetched data

  // useEffect to simulate fetching data when component mounts
  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setMessage('Hello, this message is fetched from the server!');
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.counterText}>Count: {count}</Text>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  card: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});

export default App;
