import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Modal, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const ChatList = () => {

    const navigation = useNavigation();
    
    const data = [
        { id: 1, name: "Junia", message: "I’m not a hoarder but I reallyLoream ipls", image: require("../../assets/images/chat/avt01.jpg") },
        { id: 2, name: "Rose", message: "Is your body from Mcdonals", image: require("../../assets/images/chat/avt02.jpg") },
        { id: 3, name: "Yoongi", message: "Can I follow you? Cause my mom told me to follow my dreams...", image: require("../../assets/images/chat/avt03.jpg") },
        { id: 4, name: "Zu", message: "Sorry, but you owe me a drink. When I looked at you, I dropped mine.", image: require("../../assets/images/chat/avt04.jpg") },
    ];

    const Item = ({ obj , index}) => {
        return (
            <TouchableOpacity style={styles.chatItem}
                key={index}
                onPress={() => navigation.navigate('ChatDetail', {obj})}
                activeOpacity={1}>
                <Image source={obj.image} 
                    style={styles.imgAvt} />
                <View style={styles.vInfo}>
                    <Text style={styles.txtName}>{obj.name}</Text>
                    <Text style={styles.txtMessage}>{obj.message}</Text>
                </View>
                <View style={styles.vMessage}>
                    <Text style={styles.txtHours}>10:00</Text>
                    <View style={styles.vNumber}>
                        <Text style={styles.txtNumber}>3</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btnBack}
                        onPress={() => navigation.goBack()}
                        activeOpacity={1}>
                        <Icon name="arrow-left" size={30} />
                    </TouchableOpacity>
                    <Text style={styles.txtHeader}>Chat</Text>
                </View>
                {data.map((item, index) => { return <Item obj={item} key={index} /> })}
            </View>
        </SafeAreaView>
    );
}

export default ChatList;

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
        marginTop: '25%',
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
        position: 'relative',
    },
    btnBack: {
        padding: 5,
        marginRight: 20,
        position: 'absolute',
        left: 0,
    },
    txtHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 20,
        textAlign: 'center',
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -50 }],
    },
    chatItem: { 
        flexDirection: 'row', 
        padding: 10, 
        borderBottomWidth: 1, 
        borderBottomColor: '#f0f0f0', 
        alignItems: 'center' 
    },
    imgAvt: {
        width: 50, 
        height: 50, 
        borderRadius: 25 
    },
    vInfo: { 
        flex: 1, 
        marginLeft: 10, 
    },
    txtName: { 
        fontSize: 16, 
        fontWeight: 'bold' 
    },
    txtMessage: { 
        fontSize: 14, 
        color: 'gray' 
    },
    vMessage: { 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    txtHours: { 
        fontSize: 12, 
        color: 'gray' 
    },
    vNumber: { 
        width: 20, 
        height: 20, 
        borderRadius: 10, 
        backgroundColor: 'red', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 5 
    },
    txtNumber: { 
        fontSize: 12, 
        color: 'white' 
    },
});