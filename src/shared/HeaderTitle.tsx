import {
    StyleSheet,
    View, 
    Text,
} from 'react-native';

const HeaderTitle = ({
    title,
}) => {
    return (
        <View style={styles.header__container}>
            <Text style={styles.title__text}>
                { title }
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header__container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 30,
    },
    title__text: {
        fontFamily: 'Medel',
        fontSize: 28,
        color: '#000',
        justifyContent: 'center',
    },
})

export default HeaderTitle;