// screens/CartScreen.js

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useCart from './useCart';
import CartItem from './components/CartItem';
import CustomButton from 'components/CustomButton';

export default function CartScreen() {
  const { cartItems, handleRemove, handleClearCart, totalAmount } = useCart();

  const renderItem = ({ item }) => (
    <CartItem item={item} onRemove={handleRemove} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContent}
          />
          <View style={styles.footer}>
            <Text style={styles.totalText}>
              Total: ${totalAmount.toFixed(2)}
            </Text>
            <CustomButton
              title="Clear Cart"
              onPress={handleClearCart}
              style={styles.clearButton}
              textStyle={styles.clearButtonText}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // ... (same styles as before, but remove item-specific styles)
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
    color: '#007AFF',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#555',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  footer: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  clearButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
