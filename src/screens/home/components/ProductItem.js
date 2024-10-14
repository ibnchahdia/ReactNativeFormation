// components/ProductItem.js

import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CustomButton from 'components/CustomButton';

const ProductItem = ({ item, onOpenDetail, onAddToCart }) => {
  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => onOpenDetail(item)}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <Text style={styles.productTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <CustomButton
        title="Add to Cart"
        onPress={() => onAddToCart(item)}
        style={styles.addButton}
        textStyle={styles.addButtonText}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
    borderRadius: 8,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.25, // For iOS shadow
    shadowRadius: 3.84, // For iOS shadow
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProductItem;
