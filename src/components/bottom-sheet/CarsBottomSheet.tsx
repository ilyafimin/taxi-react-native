import { 
    useMemo, 
    useRef,
    useState,
} from 'react';

import messaging from '@react-native-firebase/messaging';

import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

import BottomSheet, { BottomSheetFlatList }  from '@gorhom/bottom-sheet';

type IAvaibleCar = {
    id: string,
    name: string,
    photo: NodeRequire,
    text: string,
    price: string,
}

const avaibleCars: IAvaibleCar[] = [
    {
        id: 'mini',
        name: 'Mini',
        photo: require('../../assets/mini_car.png'),
        text: '4+1 Person',
        price: '$20'
    },
    {
        id: 'bike',
        name: 'Bike',
        photo: require('../../assets/bike.png'),
        text: '1 Person',
        price: '$10',
    },
    {
        id: 'bajaji',
        name: 'Bajaji',
        photo: require('../../assets/bajaji.png'),
        text: '3+1 Person',
        price: '$12',
    },
]

const CarsBottomSheet = () => {
    const ref = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['46%', '46%'], [])
    const [selectedType, setSelect] = useState<string | null>(null);
    
    const checkToken = async () => {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
            console.log(fcmToken);
        }
    }

    checkToken();

    const renderItem = ({
        id,
        name,
        photo,
        price,
        text,
    }: IAvaibleCar
    ) => {
        const isSelected = id === selectedType;

        const handleClick = () => {
            setSelect(isSelected ? null : id);
        };

        return (
            <TouchableOpacity 
                style={stylesItem.container(isSelected ? '#F4F5F6' : '#fff')}
                onPress={() => handleClick()}
            >
                <View style={stylesItem.infoContainer}>
                    <View style={stylesItem.imageContainer}>
                        <Image 
                            source={photo}
                        />
                    </View>
                    <View>
                        <Text style={stylesItem.text_1}>
                            { name }
                        </Text>
                        <Text style={stylesItem.text_2}>
                            { text }
                        </Text>
                    </View>
                </View>
                <Text style={stylesItem.text_1}>
                    { price }
                </Text>
            </TouchableOpacity>
        )
    }

    return (
        <BottomSheet
            index={1}
            ref={ref}
            snapPoints={snapPoints}
        >
            <View style={styles.content}>
                <Text style={styles.header_text}>
                    Available Rides
                </Text>
                <BottomSheetFlatList 
                    data={avaibleCars}
                    keyExtractor={({ id }) => id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => renderItem(item)}
                    ItemSeparatorComponent={<View style={{ height: 16 }} />}
                    style={{ marginTop: 14 }}
                    contentContainerStyle={{ paddingBottom: 14 }}
                />
                {
                    selectedType && (
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.button__text}>
                                Book Ride
                            </Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </BottomSheet>
    )
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        paddingHorizontal: 24,
    },
    header_text: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: '700',
    },
    button: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
        borderRadius: 50,
        backgroundColor: '#3422F2',
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button__text: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 18,
        fontWeight: '600',
    }
})

const stylesItem = StyleSheet.create({
    container: (color: string) => ({
        paddingHorizontal: 22,
        paddingVertical: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#F4F5F6',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: color,
    }),
    infoContainer: {
        flexDirection: 'row',
        gap: 14,
    },
    imageContainer: {
        width: 65,
        justifyContent: 'center',
    },
    text_1: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: '600',
    },
    text_2: {
        color: '#A5A5A5',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '300',
    }
})

export default CarsBottomSheet;