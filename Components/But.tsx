import { useCountStore } from '@/store/usecountStore';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const But = () => {
    console.log("but rednder");
    // subcripe to countstore any change store rerender
    // render if addcount his ref change
    const addCount = useCountStore((state) => state.addCount);
    return (
        <View>
            <Button title='inc' onPress={addCount} />
        </View>
    )
}

export default But

const styles = StyleSheet.create({})