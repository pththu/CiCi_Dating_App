import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const Profile = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>Profile</Text>
        </SafeAreaView>
    );
}

export default Profile;