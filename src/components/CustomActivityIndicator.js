import React from 'react';
import { ActivityIndicator } from 'react-native';

const CustomActivityIndicator = ({ size = 'large', color = '#007AFF', style, ...props }) => {
  return <ActivityIndicator size={size} color={color} style={style} {...props} />;
};

export default CustomActivityIndicator;
