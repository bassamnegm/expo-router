import But from '@/Components/But';
import Show from '@/Components/Show';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
import React from 'react';
import { Button, View } from 'react-native';


const login = () => {

    async function show() {

        AsyncStorage.setItem("token", "negm");
        // let result = await ImagePicker.launchImageLibraryAsync({
        //     mediaTypes: ['images', 'videos'],
        //     allowsEditing: true,
        //     aspect: [4, 3],
        //     quality: 1,
        // });
        // console.log(result);
    }
    return (
        <View style={{ paddingTop: 50 }}>

            <Show />
            <But />
            <Button title='login' onPress={show} />
            <Link href='/(tabs)/user'>go to home</Link>


        </View>
    )
}

export default login