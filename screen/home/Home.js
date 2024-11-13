import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const Home = () => {

    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <Text>Home</Text>
        </SafeAreaView>
    );
}

export default Home;