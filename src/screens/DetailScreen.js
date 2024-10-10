// screens/DetailScreen.js

import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';

export default function DetailScreen({ route, navigation }) {
  const { product } = route.params;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    Alert.alert('Success', 'Product added to cart!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>

      {/* Additional product details can be added here */}

      <Button title="Add to Cart" onPress={handleAddToCart} color="#007AFF" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: '#FF3B30',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
});
