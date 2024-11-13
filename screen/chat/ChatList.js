import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const ChatList = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>ChatList</Text>
        </SafeAreaView>
    );
}

export default ChatList;