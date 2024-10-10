import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons

function App(): React.JSX.Element {
  // State to store form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Simulate fetching data when the component mounts
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  // Handle form submission
  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill all the fields');
    } else {
      Alert.alert('Form Submitted', `Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Left Button */}
        <TouchableOpacity onPress={() => Alert.alert('Left button pressed!')}>
          <Icon name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.headerTitle}>Contact Us</Text>

        {/* Right Button */}
        <TouchableOpacity onPress={() => Alert.alert('Right button pressed!')}>
          <Icon name="menu" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Rounded Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }} // Example image
            style={styles.profileImage}
          />
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Name Input */}
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName} // Update name state
          />

          {/* Email Input */}
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail} // Update email state
            keyboardType="email-address"
          />

          {/* Message Input */}
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter your message"
            value={message}
            onChangeText={setMessage} // Update message state
            multiline={true}
            numberOfLines={4}
          />

          {/* Submit Button */}
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Space between left and right buttons
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 15,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Makes the image circular
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Align text to top when typing in multiline
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default App;
