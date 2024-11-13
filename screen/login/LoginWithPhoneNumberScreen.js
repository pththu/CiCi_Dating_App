import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const countryCode = [
    { value: 'Vietnam', country: 'VN +84' },
    { value: 'US', country: 'US +1' },
    { value: 'Russia', country: 'R +7' },
    { value: 'India', country: 'IN +91' },
    { value: 'Canada', country: 'CA +1' },
    { value: 'Australia', country: 'AU +61' },
    { value: 'UK', country: 'GB +44' },
    { value: 'France', country: 'FR +33' },
    { value: 'Germany', country: 'DE +49' },
    { value: 'Japan', country: 'JP +81' },
    { value: 'South Korea', country: 'KR +82' },
    { value: 'Brazil', country: 'BR +55' },
    { value: 'Mexico', country: 'MX +52' }
];

export const LoginOTP = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.btnBack}
                    onPress={() => navigation.goBack()}
                    activeOpacity={1}>
                    <Icon name='arrow-left' size={20} color={'grey'}/>
                </TouchableOpacity>
                <Text style={styles.txtTitle}>Enter OTP</Text>
                <View style={styles.vInputOTP}>
                    <TextInput style={styles.ipOTP} />
                    <TextInput style={styles.ipOTP} />
                    <TextInput style={styles.ipOTP} />
                    <TextInput style={styles.ipOTP} />
                </View>
                <TouchableOpacity style={styles.btnContinue}
                    activeOpacity={1}>
                    <Text style={styles.txtContinue}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const LoginWithPhoneNumberScreen = () => {

    const navigation = useNavigation();
    const [selectedCountryCode, setSelectedCountryCode] = useState("vietnam");

    const handlerContinue = () => {
        navigation.navigate('LoginOTP');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.btnBack}
                    onPress={() => navigation.goBack()}
                    activeOpacity={1}>
                    <Icon name='arrow-left' size={20} color={'grey'}/>
                </TouchableOpacity>
                <Text style={styles.txtTitle}>My number is</Text>
                <View style={styles.vInputNumberPhone}>
                    <View style={styles.pickerCountryCode}>
                        <Picker
                            selectedValue={selectedCountryCode}
                            onValueChange={(itemValue) => setSelectedCountryCode(itemValue)}>
                            {countryCode.map((item, index) => (
                                <Picker.Item style={styles.pickerItem} label={item.country} value={item.value} />
                            ))}
                        </Picker>
                    </View>
                    <TextInput style={styles.ipPhoneNumber}
                        placeholder='Phone Number'
                    />
                </View>
                <View style={styles.vPolicy}>
                    <Text style={styles.txtPolicy}>By clicking Log In, you agree with our Terms.  Learn how process your data in our Privacy  Policy and Cookies Policy. By clicking Log In, you agree with our Terms.  Learn how process your data in our Privacy  Policy and Cookies
                    </Text>
                </View>
                <TouchableOpacity style={styles.btnContinue}
                    onPress={handlerContinue}
                    activeOpacity={1}>
                    <Text style={styles.txtContinue}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

export default LoginWithPhoneNumberScreen;

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'flex-start',
    },
    subContainer: {
        marginTop: '20%',
        marginHorizontal: '10%',
        flex: 1,
        gap: 20,
    },
    btnBack: {
        alignItems: 'flex-start'
    },
    txtTitle: {
        fontSize: 33,
        fontWeight: 'bold',
        color: '#303030',

    },
    vInputNumberPhone: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pickerCountryCode: {
        width: '40%',
        borderBottomWidth: 1,
        borderBottomColor: '#4D4D4D',
        fontSize: 16,
    },
    pickerItem: {
        fontSize: 16,
    },
    ipPhoneNumber: {
        width: '55%',
        borderBottomWidth: 1,
        borderBottomColor: '#4D4D4D',
        paddingLeft: 10,
        fontSize: 16,
    },
    vPolicy: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    txtPolicy: {
        flexDirection: 'row',
        lineHeight: 30,
        fontSize: 13,
        color: '#8C8C8C',
    },
    btnContinue: {
        backgroundColor: '#AA3FEC',
        paddingVertical: 20,
        borderRadius: 50,
    },
    txtContinue: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    vInputOTP: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    ipOTP: {
        borderBottomWidth: 1,
        borderBottomColor: '#8E8E8E',
        width: '20%',
        fontSize: 20,
        paddingLeft: 10,
        paddingVertical: 10,
    },
});