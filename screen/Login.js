import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Login = ({ navigator }) => {

    const [isSplashVisible, setIsSplashVisible] = useState(true);
    const translateX = new Animated.Value(0);
    const loginOpacity = new Animated.Value(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            Animated.parallel([
                Animated.timing(translateX, {
                    toValue: -400, // Trượt splash ra ngoài màn hình
                    duration: 700,
                    easing: Easing.ease,
                    useNativeDriver: true,
                }),
                Animated.timing(loginOpacity, {
                    toValue: 1, // Hiển thị màn hình login từ từ
                    duration: 700,
                    easing: Easing.ease,
                    useNativeDriver: true,
                })
            ]).start(() => setIsSplashVisible(false)); // Sau khi hoàn tất, ẩn splash
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                style={styles.background}
                colors={['#A020F0', '#BC7BE4']}
                locations={[0.21, 1]} />
            {isSplashVisible && (
                <Animated.View style={[styles.containerSplash, { transform: [{ translateX: translateX }] }]}>

                    <Image style={styles.logo} source={require('../assets/images/login/logo.png')} />
                </Animated.View>
            )}
            <Animated.View style={[styles.containerLogin, { opacity: loginOpacity }]}>
                <View>
                    <Image style={styles.logo} source={require('../assets/images/login/logo.png')} />
                </View>
                <Text>By clicking Log In, you agree with our Terms.
                    Learn how we process your data in our Privacy
                    Policy and Cookies Policy.</Text>
            </Animated.View>
        </SafeAreaView>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        margin: 0,
        padding: 0,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    containerSplash: {
        margin: 0,
        padding: 0,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    containerLogin: {
        margin: 0,
        padding: 0,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute', // Để login luôn ở đúng vị trí khi splash dịch chuyển
        width: '100%',
        height: '100%',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    logo: {
        marginTop: 170,
    }
});