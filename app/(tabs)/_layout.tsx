import { useProductStore } from '@/store/useProductStore';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

const _layout = () => {
    const cart = useProductStore(state => state.cart);
    return (
        <Tabs
            screenOptions={{ tabBarActiveTintColor: 'red' }}>
            <Tabs.Screen name='cart' options={{

                tabBarBadge: cart.length
                ,
                tabBarIcon: ({ color }) => <FontAwesome name="cart-arrow-down" size={24} color={color} />,
            }}></Tabs.Screen>

        </Tabs>
    )
}

export default _layout