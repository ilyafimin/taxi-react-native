import {
    View,
    SafeAreaView,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import HeaderLeft from '../shared/HeaderLeft';

import { 
    DrawerSceneWrapper,
    CarsBottomSheet,
} from '../components';

const MapScreen = ({ navigation }) => {
    return (
        <DrawerSceneWrapper>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <HeaderLeft 
                        iconName={'menu'}
                        handleClick={() => navigation.openDrawer()}
                    />
                </View>
                <View style={styles.map}>
                    
                </View>
                <CarsBottomSheet />
            </SafeAreaView>
        </DrawerSceneWrapper>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
       
    },
    map: {
        flex: 1,
        backgroundColor: 'rgba(240, 240, 240, 1)'
    }
})

export default MapScreen;