import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "../components/BottomTabs";
import Login from "./Login";

const drawer = createDrawerNavigator();

export default function Drawer() {
  return (
    <NavigationContainer>
      <drawer.Navigator screenOptions={{ headerShown: false }}>
        <drawer.Screen name="Home" component={BottomTabs} />
        <drawer.Screen name="Login" component={Login} />
      </drawer.Navigator>
    </NavigationContainer>
  );
}
