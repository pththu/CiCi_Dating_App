import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const ChatDetail = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>ChatDetail</Text>
        </SafeAreaView>
    );
}

export default ChatDetail;