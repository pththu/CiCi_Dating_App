import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Animated, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

    const navigation = useNavigation();
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
                    <Image style={styles.logo} source={require('../../assets/images/login/logo.png')} />
                </Animated.View>
            )}
            <Animated.View style={[styles.containerLogin, { opacity: loginOpacity }]}>
                <Image style={styles.logo} source={require('../../assets/images/login/logo.png')} />
                {/* Dòng chữ dưới logo */}
                <View style={styles.vPolicy}>
                    <Text style={styles.txtPolicy01}>By clicking Log In, you agree with our </Text>
                    <Text style={styles.txtPolicy02}>Terms.</Text>
                    <Text style={styles.txtPolicy01}>Learn how we process your data in our </Text>
                    <Text style={styles.txtPolicy02}>Privacy</Text>
                </View>
                <View style={styles.vPolicy}>
                    <Text style={styles.txtPolicy02}>Policy</Text>
                    <Text style={styles.txtPolicy01}> and </Text>
                    <Text style={styles.txtPolicy02}>Cookies Policy.</Text>
                </View>
                <View style={styles.vBtn}>
                    <TouchableOpacity style={styles.btnLogin}
                        onPress={() => navigation.navigate('inap')}
                        activeOpacity={1}>
                        <Image source={require('../../assets/images/login/iconGG.png')}
                            style={styles.imgLogin}
                        />
                        <Text style={styles.txtLogin}>Login With GOOGLE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLogin}
                        activeOpacity={1}>
                        <Image source={require('../../assets/images/login/iconfb.png')}
                            style={styles.imgLogin}
                        />
                        <Text style={styles.txtLogin}>Login With facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLogin}
                        onPress={() => navigation.navigate('LoginWithPhoneNumberScreen')}
                        activeOpacity={1}>
                        <Image source={require('../../assets/images/login/iconphone.png')}
                            style={styles.imgLogin}
                        />
                        <Text style={styles.txtLogin}>Login With Phone</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.vSignup}>
                    <Text style={styles.txtPolicy01}>Don't have an account? </Text>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 13,
                        color: '#fff',
                    }}
                        onPress={() => navigation.navigate('SignupScreen')}
                    >Sign Up</Text>
                </View>
            </Animated.View>
        </SafeAreaView >
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
        marginBottom: 20,
    },
    vPolicy: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtPolicy01: {
        fontSize: 13,
        color: '#fff',
    },
    txtPolicy02: {
        textDecorationLine: 'underline',
        fontSize: 13,
        color: '#fff',
    },
    vBtn: {
        width: '80%',
        marginTop: 20,
    },
    btnLogin: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginVertical: 15,
    },
    imgLogin: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    txtLogin: {
        fontSize: 16,
    },
    vSignup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    }
});