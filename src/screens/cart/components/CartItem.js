// components/CartItem.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomButton from '../../../components/CustomButton';

const CartItem = ({ item, onRemove }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
        <CustomButton
          title="Remove"
          onPress={() => onRemove(item.id)}
          style={styles.removeButton}
          textStyle={styles.removeButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 1 }, // For iOS shadow
    shadowOpacity: 0.2, // For iOS shadow
    shadowRadius: 1.41, // For iOS shadow
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 8,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 14,
    color: '#FF3B30',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#555',
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CartItem;
