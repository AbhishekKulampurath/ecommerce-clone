import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../screens/SearchBar";
import { Input } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";

const SearchData = [
  { id: "1", title: "First Item" },
  { id: "2", title: "Second Item" },
  { id: "3", title: "Third Item" },
  { id: "4", title: "Fourth Item" },
];

const tabs = [
  {
    image: require("../assets/images/menu.png"),
    text: "Menu",
  },
  {
    image: require("../assets/images/Myntra_logo.png"),
    text: "Logo",
  },
  {
    image: require("../assets/images/search-symbol.png"),
    text: "Search",
  },
  {
    image: require("../assets/images/notification.png"),
    text: "Notifications",
  },
  {
    image: require("../assets/images/heart.png"),
    text: "Wishlist",
  },
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Bag",
  },
];
export default function Navbar() {

  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);

  // const onSearchToggle = () => {
  //   setIsSearchBtnClicked(!isSearchBtnClicked);
  //             console.log("Button clicked");

  // }
  
  return (
    <SafeAreaView>
      {!isSearchBtnClicked && (
        <ScrollView
          horizontal
          style={styles.NavbarStyle}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity>
            <Image source={tabs[0].image} style={styles.MenuIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={tabs[1].image} style={styles.MyntraLogo} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              
            }}
          >
            <Image source={tabs[2].image} style={styles.RightSideIcons} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={tabs[3].image} style={styles.RightSideIcons} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={tabs[4].image} style={styles.RightSideIcons} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={tabs[5].image} style={styles.RightSideIcons} />
          </TouchableOpacity>
        </ScrollView>
      )}
      {isSearchBtnClicked && (
        <ScrollView horizontal>
          <TextInput placeholder="Search categories" />
          <TouchableOpacity
            onPress={() => {
              setIsSearchBtnClicked(!isSearchBtnClicked);
              console.log("Button clicked");
            }}
          >
            <Image source={tabs[2].image} style={styles.MenuIcon} />
          </TouchableOpacity>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  RightSideIcons: {
    right: 20,
    marginLeft: 10,
    width: 30,
    height: 30,
    marginTop: 6,
    resizeMode: "contain",
  },
  MyntraLogo: {
    marginRight: 120,
    marginLeft: 10,
    width: 80,
    height: 33,
    marginTop: 7,
    resizeMode: "stretch",
  },
  NavbarStyle: {
    paddingBottom: 5,
    paddingTop: 7,
    backgroundColor: "#fff",
  },
  MenuIcon: {
    left: 5,
    width: 30,
    height: 30,
    marginTop: 6,
    resizeMode: "contain",
  },
  SearchContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
});
