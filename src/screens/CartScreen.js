import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/slices/cartSlice';

export default function CartScreen() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'Are you sure you want to remove all items from the cart?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear',
          onPress: () => dispatch(clearCart()),
          style: 'destructive',
        },
      ]
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemove(item.id)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
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
            <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClearCart}
            >
              <Text style={styles.clearButtonText}>Clear Cart</Text>
            </TouchableOpacity>
            {/* Future Implementation: Proceed to Checkout */}
            {/* <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity> */}
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
  checkoutButton: {
    backgroundColor: '#34C759',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
