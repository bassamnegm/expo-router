import { Link } from 'expo-router'
import React from 'react'
import { View } from 'react-native'

const login = () => {
    return (
        <View style={{ paddingTop: 50 }}>
            <Link href="/(tabs)/home">go to home</Link>
        </View>
    )
}

export default login