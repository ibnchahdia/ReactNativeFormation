import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import useHome from './useHome';
import CustomActivityIndicator from 'components/CustomActivityIndicator';
import ProductItem from './components/ProductItem';

export default function HomeScreen({ navigation }) {

  const { 
    products,
    loading,
    handleOpenDetail,
    handleAddToCart, 
  } = useHome(navigation);

  // Render each product item
  const renderItem = ({ item }) => (
    <ProductItem
      item={item}
      onOpenDetail={handleOpenDetail}
      onAddToCart={handleAddToCart}
    />
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <CustomActivityIndicator />
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
