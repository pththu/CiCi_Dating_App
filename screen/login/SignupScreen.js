import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const SignUpOTP = () => {
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
                <TouchableOpacity style={styles.btnResend}>
                    <Text style={styles.txtResend}>RESEND</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContinue}
                    activeOpacity={1}>
                    <Text style={styles.txtContinue}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const SignupScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dateOfBirth;
        setShowDatePicker(false);
        setDateOfBirth(currentDate);
    };

    const handleSignUpOTP = () => {
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.btnBack}
                    onPress={() => navigation.goBack()}
                    activeOpacity={1}>
                    <Icon name='arrow-left' size={20} color={'grey'}/>
                </TouchableOpacity>
                <Text style={styles.txtTitle}>Sign Up</Text>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.ipName}
                        placeholder="Full Name"
                        value={fullName}
                        onChangeText={setFullName}
                    />
                    <View style={styles.vGender}>
                        <Picker
                            selectedValue={gender}
                            onValueChange={(itemValue) => setGender(itemValue)}
                            placeholder='Gender'
                            style={styles.pickerGender}
                        >
                            <Picker.Item style={styles.pickerItem} label="Gender" value="" />
                            <Picker.Item style={styles.pickerItem} label="Male" value="male" />
                            <Picker.Item style={styles.pickerItem} label="Female" value="female" />
                            <Picker.Item style={styles.pickerItem} label="Other" value="other" />
                        </Picker>
                    </View>
                    <TouchableOpacity
                        style={styles.chooseDate}
                        onPress={() => setShowDatePicker(true)}
                    >
                        <Text style={styles.txtDate}>
                            {dateOfBirth.toLocaleDateString()}
                        </Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={dateOfBirth}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={handleDateChange}
                        />
                    )}
                    <TextInput
                        style={styles.ipName}
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                    <TouchableOpacity style={styles.btnSignUp}
                        onPress={() => navigation.navigate('SignUpOTP')}
                    >
                        <Text style={styles.txtSignUp}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.socialContainer}>
                    <Text style={styles.or}>or</Text>
                    <View style={styles.vSocial}>
                        <TouchableOpacity style={styles.btnSocial}>
                            <Image source={require('../../assets/images/login/iconfb2.png')} style={styles.imgSocial} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnSocial}>
                            <Image source={require('../../assets/images/login/iconGG.png')} style={styles.imgSocial} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SignupScreen;

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
    txtTitle: {
        fontSize: 33,
        fontWeight: 'bold',
        color: '#303030',
    },
    formContainer: {
        width: '100%',
        justifyContent: 'flex-start',
        gap: 30,
    },
    ipName: {
        paddingVertical: 10,
        paddingLeft: 20,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#8E8E8E',
    },
    vGender: {
        borderBottomWidth: 1,
        borderBlockColor: '#8E8E8E',
    },
    pickerGender: {
    },
    pickerItem: {
    },
    chooseDate: {
        padding: 10,
        borderBottomWidth: 1,
        borderBlockColor: '#8E8E8E',
    },
    datePickerContainer: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    datePickerText: {
        fontSize: 16,
    },
    txtDate: {
        fontSize: 15,
        paddingLeft: 10,
    },
    btnSignUp: {
        backgroundColor: '#AA3FEC',
        paddingVertical: 15,
        borderRadius: 50,
    },
    txtSignUp: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    or: {
        textAlign: 'center'
    },
    vSocial: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 25,
    },
    imgSocial: {
        width: 40,
        height: 40,
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
    btnResend: {

    },
    txtResend: {
        textAlign: 'center',
        color: '#8E8E8E',
    },
})