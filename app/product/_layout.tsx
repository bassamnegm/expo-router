import { Slot } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const _layout = () => {
    return (
        <View>
            <Text>Product_layout</Text>
            <Slot />
        </View>
    )
}

export default _layout

const styles = StyleSheet.create({})