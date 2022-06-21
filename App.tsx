import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "./screens/Explore";
import Studio from "./screens/Studio";
import Profile from "./screens/Profile";
import Categories from "./screens/Categories";
import BottomTabs from "./components/BottomTabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./screens/Login";
import Drawer from "./screens/Drawer";

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen options={{
//         headerShown : false
//       }}
//        name="Home" component={Home}  />
//       <Tab.Screen name="Categories" component={Categories} />
//       <Tab.Screen name="Explore" component={Explore} />
//       <Tab.Screen name="Studio" component={Studio} />
//       <Tab.Screen name="Profile" component={Profile} />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return <Drawer />;
}

// import Home from './screens/Home';

// export default function App() {
//   return (
//     <View style = {{
//       backgroundColor : "#F5F5F5"
//     }}>
//       <Home/>
//     </View>
//   );
// }
