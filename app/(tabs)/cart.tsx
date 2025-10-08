import { useProductStore } from '@/store/useProductStore';
import React from 'react';
import { Text, View } from 'react-native';

const Cart = () => {
    const cart = useProductStore(state => state.cart);
    console.log(cart);
    return (
        <View>
            <Text>Cart</Text>
        </View>
    )
}

export default Cart