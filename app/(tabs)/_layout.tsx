import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

const _layout = () => {
    return (
        <Tabs
            screenOptions={{ tabBarActiveTintColor: 'red' }}>
            <Tabs.Screen name='cart' options={{

                tabBarBadge: 2
                ,
                tabBarIcon: ({ color }) => <FontAwesome name="cart-arrow-down" size={24} color={color} />,
            }}></Tabs.Screen>

        </Tabs>
    )
}

export default _layout