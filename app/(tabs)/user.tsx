import { Usser, useUserStore } from '@/store/useUserStore';
import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';

const User = () => {
    const { users, addUsers } = useUserStore()
    useEffect(() => {
        addUsers();
    }, [])
    function RednderData({ item }: { item: Usser }) {
        return <Text style={{ margin: 5, borderWidth: 2 }}>{item.firstName}</Text>
    }
    return (
        <View>
            <FlatList
                numColumns={2}
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={RednderData}
            />
        </View>
    )
}

export default User