import { 
    View, 
    Text,
    StyleSheet,
} from 'react-native';

import { 
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

//import Icons from 'react-native-vector-icons/MaterialIcons';

const CustomDrawerContent = (props) => {
    return (
        <View style={{flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.content}>
                    <View style={styles.img__container}></View>
                    <Text style={styles.text}>Frank Smith</Text>
                </View>
                <DrawerItemList 
                    {...props}
                />
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <DrawerItem 
                    label={'Logout'} 
                    labelStyle={styles.drawer_item__text}
                    onPress={() => console.log(1)}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        backgroundColor: 'red,'
    },
    img__container: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor: '#ccc',
        marginVertical: 15,
    },
    text: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Poppins-Regular'
    },
    footer: {
        marginBottom: 45,
    },
    drawer_item__text: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins-Regular',
    }
})

export default CustomDrawerContent;