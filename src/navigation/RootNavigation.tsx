import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Login.Screen";
import RegisterScreen from "../screens/Register.Screen";
import VerificationScreen from "../screens/Verification.Screen";

import DrawerNavigation from "./DrawerNavigation";

import HeaderLeft from "../shared/HeaderLeft";
import HeaderTitle from "../shared/HeaderTitle";

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="GeneralContent"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
            />
            <Stack.Screen
                name="Register"
                component={RegisterScreen}
            />
            <Stack.Screen
                name="GeneralContent"
                component={DrawerNavigation}
            />
            <Stack.Screen
                name="Verification"
                component={VerificationScreen}
                options={({navigation}) => ({
                    headerShown: true,
                    headerTransparent: true,
                    headerBackVisible: false,
                    headerLeft: () => <HeaderLeft handleClick={() => navigation.goBack()} iconName={'chevron-left'} />,
                    headerTitle: () => <HeaderTitle title={''} />
                })}
            />
        </Stack.Navigator>
    )
}

export default RootNavigation;