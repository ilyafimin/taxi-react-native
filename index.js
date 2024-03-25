import {AppRegistry} from 'react-native';
import {PermissionsAndroid} from 'react-native';
import messaging from '@react-native-firebase/messaging';

import App from './src/App';
import {name as appName} from './app.json';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

messaging().getInitialNotification(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
});
  
AppRegistry.registerComponent(appName, () => App);
