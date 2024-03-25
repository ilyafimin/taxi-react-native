import { createDrawerNavigator } from '@react-navigation/drawer';

import { CustomDrawerContent } from '../components';

import MapScreen from '../screens/Map.Screen';

const Drawer = createDrawerNavigator();


function DrawerNavigation() {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'slide',
        overlayColor: 'transparent',
        drawerLabelStyle: {
          color: '#fff',
          fontSize: 16,
          fontFamily: 'Poppins-Standart',
        },
        drawerItemStyle: {
          backgroundColor: 'transparent'
        },
        drawerStyle: { backgroundColor: '#3422F2', width: '50%' },
        sceneContainerStyle: { backgroundColor: '#3422F2' },
      }}
    >
      <Drawer.Screen 
        name="Map" 
        component={MapScreen}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;