import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Categories from "../screens/Categories";
import Explore from "../screens/Explore";
import Studio from "../screens/Studio";
import Profile from "../screens/Profile";

const Icons = [
  {
    image: require("../assets/images/bottomtabs/home.png"),
    text: "Home",
  },
  {
    image: require("../assets/images/bottomtabs/categories-active.png"),
    text: "Categories",
  },
  {
    image: require("../assets/images/bottomtabs/explore.png"),
    text: "Explore",
  },
  {
    image: require("../assets/images/bottomtabs/studio-active.png"),
    text: "Studio",
  },
  {
    image: require("../assets/images/bottomtabs/profile.png"),
    text: "Profile",
  },
];

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={Icons[0].image}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                {Icons[0].text}
              </Text>
            </View>
          ),
        }}
        name="Home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={Icons[1].image}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                {Icons[1].text}
              </Text>
            </View>
          ),
        }}
        name="Categories"
        component={Categories}
      />

      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={Icons[2].image}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                {Icons[2].text}
              </Text>
            </View>
          ),
        }}
        name="Explore"
        component={Explore}
      />

      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={Icons[3].image}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                {Icons[3].text}
              </Text>
            </View>
          ),
        }}
        name="Studio"
        component={Studio}
      />

      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={Icons[4].image}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                {Icons[4].text}
              </Text>
            </View>
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

export default function BottomTabs() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
  }