import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const Match = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>Match</Text>
        </SafeAreaView>
    );
}

export default Match;