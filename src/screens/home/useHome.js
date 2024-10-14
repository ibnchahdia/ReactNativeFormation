import { useEffect, useState } from 'react';
import {
  Alert,
} from 'react-native';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import Config from "react-native-config";
import { PRODUCTS_API } from '../../constants/endpoints';

const useHome = (navigation) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();

    // Fetch products from API
    const fetchProducts = async () => {
        try {
        const response = await axios.get(Config.BASE_URL+PRODUCTS_API);
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

    const handleOpenDetail = (item) => {
        navigation.navigate('Detail', { product: item })
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return {
        products,
        loading,
        handleOpenDetail,
        handleAddToCart,
    };
};

export default useHome;
