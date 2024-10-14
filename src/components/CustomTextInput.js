import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = ({ style, ...props }) => {
  return <TextInput style={[styles.input, style]} {...props} />;
};

const styles = StyleSheet.create({
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

export default CustomTextInput;
