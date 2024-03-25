import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Link } from '@react-navigation/native';

const RegisterScreen = () => {
    return (
        <SafeAreaView style={styles.area_view_container}>
            <View style={styles.main_container}>
                <View style={styles.form_container}>
                    <Image source={require('../assets/logo.png')}/>
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput
                        placeholder='Full Name'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Email'
                        autoComplete='email'
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='Phone Number'
                        autoComplete='tel'
                        keyboardType='phone-pad'
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.sendcode__button}>
                        <Text style={styles.sendcode_button__text}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.signup__container}>
                    <Text style={styles.signup__text}>
                        Don’t have an account? 
                        <Link to={'/Login'}> Sign In</Link>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    area_view_container: {
        flex: 1,
        backgroundColor: 'F8F8FF'
    },
    main_container: {
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 30,
        justifyContent: 'flex-end'
    },
    form_container: {
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Medel',
        fontSize: 36,
        color: "#000",
        paddingTop: 100,
    },
    info: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#000',
        paddingTop: 60,
    },
    input: {
        width: '100%',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#D1D1D1',
        paddingLeft: 30,
        color: '#A5A5A5',
        fontSize: 14,
        marginTop: 20,
    },
    sendcode__button: {
        width: '100%',
        height: 55,
        borderRadius: 50,
        backgroundColor: '#3422F2',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    sendcode_button__text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: '#fff',
    },
    signup__container: {
        paddingTop: 150,
        alignItems: 'center',
    },
    signup__text: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#000'
    }
})

export default RegisterScreen;