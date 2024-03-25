import { 
    View,
    StyleSheet,
} from 'react-native';

import { useDrawerProgress } from '@react-navigation/drawer';
import { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import Animated  from 'react-native-reanimated';

const DrawerSceneWrapper = ({
    children,
}) => {

    const state = useDrawerProgress();

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            {scale: interpolate(state.value, [0, 1], [1, 0.85], 'clamp')},
        ],
        borderRadius: interpolate(state.value, [0, 1], [0, 10]),
        overflow: 'hidden',
    }))
    
    return (
        <Animated.View 
            style={[styles.container, animatedStyle]}
        >
            { children }
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default DrawerSceneWrapper;