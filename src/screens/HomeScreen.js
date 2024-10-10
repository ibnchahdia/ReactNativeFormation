import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/cartSlice';
import Config from "react-native-config";

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(Config.BASE_URL+'/products');
      if (response.status === 200) {
        setProducts(response.data.products);
      } else {
        Alert.alert('Error', 'Failed to fetch products.');
      }
    } catch (error) {
      console.log('Fetch Products Error:', error);
      Alert.alert('Error', 'An error occurred while fetching products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Render each product item
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => navigation.navigate('Detail', { product: item })}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
      <Text style={styles.productTitle} numberOfLines={1}>
        {item.title}
      </Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <Button
        title="Add to Cart"
        onPress={() => dispatch(addToCart(item))}
        color="#007AFF"
      />
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Display products in 2 columns
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  flatListContent: {
    paddingBottom: 20,
  },
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
