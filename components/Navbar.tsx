import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  ListViewBase,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchBar from "../screens/SearchBar";
import { Input, ListItem } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";

// interface Props {
//   item: {
//     id: number;
//     title: string;
//   };
// }

const searchData = [
  { id: "1", title: "First Item" },
  { id: "2", title: "Second Item" },
  { id: "3", title: "Third Item" },
  { id: "4", title: "Fourth Item" },
  { id: "5", title: "Fifth Item" },
  { id: "6", title: "Seventh Item" },
  { id: "7", title: "Eighth Item" },
  { id: "8", title: "Ninth Item" },
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
  {
    image: require("../assets/images/back.png"),
    text: "Back",
  },
  {
    image: require("../assets/images/clear.png"),
    text: "Clear",
  },
];
export default function Navbar() {
  const [isSearchBtnClicked, setIsSearchBtnClicked] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isSearchCleared, setIsSearchCleared] = useState(false);

  useEffect(() => {
    console.log(searchText);
  }, [searchText]);

  const onSearchToggle = () => {
    setIsSearchBtnClicked(!isSearchBtnClicked);
    console.log("Button clicked");
  };

  const clearSearch = () => {
    setSearchText("");
    setIsSearchCleared(true);
  };

  const onSearchChange = ({
    nativeEvent: { text },
  }: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearchText(text);
    if (searchText == "") {
    }
  };

  // const ItemView = ({item}) => {
  //   return (
  //     <Text>
  //       {item.id}
  //       {". "}
  //       {item.title}
  //     </Text>
  //   );
  // };

  return (
    <SafeAreaView>
      {!isSearchBtnClicked && (
        <ScrollView
          horizontal
          style={styles.navbarStyle}
          showsHorizontalScrollIndicator={false}
        >
          <TouchableOpacity>
            <Image source={tabs[0].image} style={styles.menuIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={tabs[1].image} style={styles.myntraLogo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onSearchToggle}>
            <Image source={tabs[2].image} style={styles.rightSideIcons} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={tabs[3].image} style={styles.rightSideIcons} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={tabs[4].image} style={styles.rightSideIcons} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={tabs[5].image} style={styles.rightSideIcons} />
          </TouchableOpacity>
        </ScrollView>
      )}
      {isSearchBtnClicked && (
        <View>
          <ScrollView horizontal>
            <TouchableOpacity onPress={onSearchToggle}>
              <Image source={tabs[6].image} style={styles.backButton} />
            </TouchableOpacity>
            <TextInput
              placeholder="Search categories"
              style={styles.searchContainer}
              onChange={onSearchChange}
              value={searchText}
            />
            <TouchableOpacity onPress={clearSearch}>
              <Image source={tabs[7].image} style={styles.clearButton} />
            </TouchableOpacity>
            {/* <TouchableOpacity>
            <Image source={tabs[2].image} style={styles.MenuIcon} />
          </TouchableOpacity> */}
          </ScrollView>
          {/* <FlatList
            data={searchData}
            renderItem={({ item, index }) => {
              <View>
                <Text>
                  {index}
                  {". "}
                  {item.title}
                </Text>
              </View>;
            }}
          /> */}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rightSideIcons: {
    right: 20,
    marginLeft: 10,
    width: 30,
    height: 30,
    marginTop: 6,
    resizeMode: "contain",
  },
  myntraLogo: {
    marginRight: 120,
    marginLeft: 10,
    width: 80,
    height: 33,
    marginTop: 7,
    resizeMode: "stretch",
  },
  navbarStyle: {
    paddingBottom: 5,
    paddingTop: 7,
    backgroundColor: "#fff",
  },
  menuIcon: {
    left: 5,
    width: 30,
    height: 30,
    marginTop: 6,
    resizeMode: "contain",
  },
  searchContainer: {
    marginTop: 8,
    marginLeft: 10,
    width: 300,
    height: 44,
    borderRadius: 1,
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  backButton: {
    marginLeft: 5,
    width: 25,
    height: 30,
    marginTop: 15,
    resizeMode: "contain",
  },
  clearButton: {
    marginLeft: 8,
    width: 30,
    height: 35,
    marginTop: 12,
    resizeMode: "contain",
  },
});
