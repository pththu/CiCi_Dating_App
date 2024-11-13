import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const PlanSetting = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>PlanSetting</Text>
        </SafeAreaView>
    );
}

export default PlanSetting;