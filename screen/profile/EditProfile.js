import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const EditProfile = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>EditProfile</Text>
        </SafeAreaView>
    );
}

export default EditProfile;