import { useCountStore } from '@/store/usecountStore';
import React from 'react';
import { Text, View } from 'react-native';

const Show = () => {
    console.log("show");
    const count = useCountStore((state) => state.count);
    console.log(count);
    return (
        <View>
            <Text>{count}</Text>
        </View>
    )
}

export default Show