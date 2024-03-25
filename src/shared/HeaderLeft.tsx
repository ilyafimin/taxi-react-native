import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

const HeaderLeft = ({
    iconName,
    handleClick,
    marginLeft = 0,
}) => {
    return (
        <TouchableOpacity style={[styles.button, {marginLeft}]} onPress={handleClick}>
            <Icons 
                name={iconName} 
                size={30} 
                color='#161616'
            />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        left: 20,
        top: 20,
        zIndex: 100,
        borderRadius: 5,
        backgroundColor: '#fff',
        borderColor: '#D1D1D1',
        borderWidth: 1,
    }
})

export default HeaderLeft;