import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../../redux/slices/cartSlice';

const useCart = () => {
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

    const totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

    return {
        cartItems,
        handleRemove,
        handleClearCart,
        totalAmount,
    };
};

export default useCart;
