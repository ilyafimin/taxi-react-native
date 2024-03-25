import { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { OTPContainer } from '../components';

const VerificationScreen = () => {

    const [code, setCode] = useState<string>('');

    return (
        <SafeAreaView style={styles.area_view__container}>
            <View style={styles.main__container}>
                <Text style={styles.text}>Enter verification code</Text>
                <Text style={styles.text_2}>A code has been sent to {'32dsfsdf'}</Text>
                <OTPContainer 
                    code={code}
                    setCode={setCode}
                    numberOfFields={4}
                />
                <Text style={styles.text_3}>
                    Don't receive a code? Resend
                </Text>
                <TouchableOpacity style={styles.verify__button}>
                    <Text style={styles.verify_text__button}>Verify Now</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    area_view__container: {
        flex: 1,
        backgroundColor: '#F8F8FF',
        paddingHorizontal: 40,
        justifyContent: 'center',
    },
    main__container: {
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#000',
        margin: 0,
    },
    text_2: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#93969F'
    },
    text_3: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#000'
    },
    forms_row__container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        paddingVertical: 20,
    },
    input: {
        width: 65,
        height: 65,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D1D1D1',
        fontSize: 26,
        textAlign: 'center'
    },
    verify__button: {
        width: '100%',
        height: 55,
        borderRadius: 50,
        backgroundColor: '#3422F2',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    verify_text__button: {
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
        color: '#fff',
    },
})

export default VerificationScreen;