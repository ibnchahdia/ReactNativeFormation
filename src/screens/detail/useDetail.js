import {
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';

const useDetail = (route) => {
    const { product } = route.params;
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        Alert.alert('Success', 'Product added to cart!');
    };

    return {
        product,
        handleAddToCart,
    };
};

export default useDetail;
