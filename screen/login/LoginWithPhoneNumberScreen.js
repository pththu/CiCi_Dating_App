import { useNavigation } from '@react-navigation/native';
import { Text, SafeAreaView } from 'react-native';

const LoginWithPhoneNumberScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>LoginWithPhoneNumberScreens</Text>
        </SafeAreaView>
    );
}

export default LoginWithPhoneNumberScreen;