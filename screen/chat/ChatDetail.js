import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TabActions, useNavigation, useRoute } from '@react-navigation/native';

const Chat = () => {
    
    const route = useRoute();
    const navigation = useNavigation();
    const { obj } = route.params;
    const [message, setMessage] = useState('');

    const handleSend = () => {
        console.log('Sent message:', message);
        setMessage('');
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btnBack}
                        onPress={() => navigation.navigate('inap', {screen: 'ChatList'})}
                        activeOpacity={1}>
                        <Icon name="arrow-left" size={30} />
                    </TouchableOpacity>
                    <Image source={obj.image}
                        style={styles.imgAvt} />
                    <Text style={styles.txtName}>{obj.name}</Text>
                </View>
            </View>
            <View style={styles.vInput}>
                <TextInput style={styles.txtInput}
                    placeholder="Type a message"
                    placeholderTextColor="#000"
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity style={styles.btnSend}
                    onPress={() => { handleSend }}>
                    <Icon name="send" size={30} color={'grey'} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Chat;

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
        marginHorizontal: '5%',
        flex: 1,
        gap: 20,
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 20,
    },
    btnBack: {
        padding: 5,
        marginRight: 20,
    },
    imgAvt: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 20,
    },
    txtName: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    vInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        bottom: 20,
        width: '100%',
    },
    btnSend: {
        marginRight: 10,
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtInput: {
        marginLeft: 20,
        width: '75%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 30,
    },
});