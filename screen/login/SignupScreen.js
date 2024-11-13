import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const SignupScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>SignupScreen</Text>
        </SafeAreaView>
    );
}

export default SignupScreen;