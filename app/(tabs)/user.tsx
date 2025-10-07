import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        let res = await fetch("https://dummyjson.com/users");
        let userRes = await res.json();
        setUsers([...userRes.users])

    }
    function RednderData({ item }) {

        return <Text style={{ margin: 5, borderWidth: 2 }}>{item.lastName}</Text>
    }
    return (
        <View>
            <FlatList
                numColumns={2}
                data={users}
                keyExtractor={(item) => item.id}
                renderItem={RednderData}
            />
        </View>
    )
}

export default User