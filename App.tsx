import React, { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
import {Alert, PermissionsAndroid} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Color from './src/assets/color';

import LoginPage from './src/screens/Login';
import Home from './src/screens/Home';
import Devices from './src/screens/Devices';
import Log from './src/screens/Log';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const tabLabel = (props: { inherit: any; label: any; }) => {
  return (
    <View style={{height: '100%', justifyContent: 'center'}}>
      <Text style={{color: props.inherit.color, fontSize: 20, fontWeight: '700'}}>
        {props.label}
      </Text>
    </View>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarIconStyle: {display: 'none'},
        tabBarActiveTintColor: Color.blue,
        tabBarInactiveTintColor: Color.silver,
        tabBarLabelStyle: {display: 'none'},
        tabBarStyle: {height: 80, bottom: 0, position: 'absolute'},
      }}
    >
      <Tab.Screen
        name="Devices"
        component={Devices}
        options={{tabBarLabel: (props) => tabLabel({inherit:props, label:'Devices'})}}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: (props) => tabLabel({inherit:props, label:'Home'})}}
      />
      <Tab.Screen
        name="Log"
        component={Log}
        options={{tabBarLabel: (props) => tabLabel({inherit:props, label:'Log'})}}
      />
    </Tab.Navigator>
  );
};



export default function App() {
  const [ loading, setLoading ] = useState(true);

  // useEffect(() => {
  //   const subscribeNotification = async () => {
  //     setLoading(true);
  //     await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  //     await messaging().getToken();
  //     await messaging().subscribeToTopic('notify');
  //     setLoading(false);
  //   };
  //   subscribeNotification();
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert(JSON.stringify(remoteMessage));
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <>
      {loading
      ? <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Loading...</Text>
      </View>
      :<NavigationContainer>
          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{headerShown: false}}
          >
            <Stack.Screen name="login" component={LoginPage}/>
            <Stack.Screen name="main"component={BottomTabNavigator}/>
          </Stack.Navigator>
        </NavigationContainer>
      }
    </>
  );
}
