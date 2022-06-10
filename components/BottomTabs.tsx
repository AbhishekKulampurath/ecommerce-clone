import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Divider } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Categories from '../screens/Categories';
import Explore from '../screens/Explore';
import Studio from '../screens/Studio';
import Profile from '../screens/Profile';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{
        headerShown : false,
        tabBarIcon : ({focused}) => (
        <View>
            <Image
            source={require("../assets/images/bottomtabs/home-active.png")}
            resizeMode = "contain"
            style={{
                width : 25,
                height : 25, 
                tintColor : focused ? '#e32f45' : '#748c94'
            }}
            />
        </View>
   ) }}
       name="Home" component={Home}  />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Studio" component={Studio} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}