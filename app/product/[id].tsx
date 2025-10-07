import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 
const ProductDeat = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>{id}
            </Text>
        </View>
    )
}

export default ProductDeat

const styles = StyleSheet.create({})