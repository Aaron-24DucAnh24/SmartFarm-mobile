import messaging from '@react-native-firebase/messaging'
import { PermissionsAndroid, Platform } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export async function requestUserPermission(setLoading) {
    if(Platform.OS=="android") await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
    else await messaging().requestPermission();
    getToken()
    setLoading(false)
}

export async function notificationListener() {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log('Notification caused app to run from background state', remoteMessage)
    })

    messaging().onMessage(async remoteMessage => {
        console.log('Receive message ', remoteMessage);
    })

    messaging().getInitialNotification()
    .then(remoteMessage => {
        if(remoteMessage) {
            console.log('Notification caused app to open from quit state', remoteMessage.notification)
        }
    })
}

async function getToken() {
    let token = await AsyncStorage.getItem('token')
    console.log('The old token', token)

    if(!token) {
        try {
            const token = await messaging().getToken()
            if(token) {
                console.log('The new token', token)
                await AsyncStorage.setItem('token', token)
            }
        } catch (error) {
            console.log('Error from token', error)
        }
    }
}
