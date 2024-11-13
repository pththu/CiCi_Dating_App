import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const Likes = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>Likes</Text>
        </SafeAreaView>
    );
}

export default Likes;