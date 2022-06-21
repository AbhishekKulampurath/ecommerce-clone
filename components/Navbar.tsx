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
import { Input, ListItem } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { SearchData, searchData } from "../data/searchdata";
import AsyncStorage from "@react-native-async-storage/async-storage";
// interface Props {
//   item: {
//     id: number;
//     title: string;
//   };
// }

const storeData = async (value:type) => {
  
}

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
  const [filteredData, setFilteredData] = useState<SearchData[]>(searchData);
  const [searchString, setSearchString] = useState(String);

  //UseEffects and Filtering
  useEffect(() => {
    console.log(searchText);
    if (searchText === "") {
      setFilteredData(searchData);
    } else {
      setFilteredData(searchResult);
    }
  }, [searchText]);

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  //SearchResult
  const searchResult = searchData.filter((e) => {
    if (e.title.startsWith(searchText) !== null) {
      return e.title.toLowerCase().startsWith(searchText.toLowerCase());
    }
  });

  //OnsearchClick
  const onSearchToggle = () => {
    setIsSearchBtnClicked(!isSearchBtnClicked);
    console.log("Button clicked");
  };

  //ClearSearch
  const clearSearch = () => {
    setSearchText("");
    setIsSearchCleared(true);
  };


  //Cache
  const cacheSearch = () => {
      setSearchString(searchText);
      console.log("cache this ", searchString);
      storeData();
  }

  //StoreCache
  const storeData =async () => {
    console.log("executing storeData");
    
    try {

      console.log("This is jsonValue", searchString);
      
      await AsyncStorage.setItem('@storage_Key', searchString)
    }catch (e){
      console.log("caught in storecache");
      
    }
  }

  //ReadCache
  const getData =async () => {
    console.log("From getData before try");
    try{
      const value = await AsyncStorage.getItem('@storage_Key')
      console.log("From getData", value);
      if(value !== null){

      } 
    }
    catch (e) {

    }
  }

  //onSearchChange
  const onSearchChange = ({
    nativeEvent: { text },
  }: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearchText(text);
  };

  //
  return (
    <SafeAreaView style={{ zIndex: 4 }}>
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
        <View style={{
          bottom:14,
           zIndex: 3,
           paddingVertical:3
        }}>
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
            <TouchableOpacity onPressIn={clearSearch}>
              <Image source={tabs[7].image} style={styles.clearButton} />
            </TouchableOpacity>
            <TouchableOpacity onPressIn={cacheSearch} onPressOut = {getData}>
              <Image source={tabs[2].image} style={styles.clearButton} />
            </TouchableOpacity>
          </ScrollView>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={styles.searchList}
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.listText}>{item.title}</Text>
            )}
          />
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
    marginTop: 7,
    resizeMode: "contain",
  },
  myntraLogo: {
    marginRight: 120,
    marginLeft: 10,
    width: 80,
    height: 33,
    marginTop: 8,
    resizeMode: "stretch",
  },
  navbarStyle: {
    paddingBottom: 1,
    paddingTop: 1,
    bottom:18,
    height:55,
    backgroundColor: "#fff",
  },
  menuIcon: {
    left: 5,
    width: 30,
    height: 30,
    marginTop: 7,
    resizeMode: "contain",
  },
  searchContainer: {
    marginTop: 1,
    marginLeft: 10,
    width: 250,
    height: 50,
    borderRadius: 1,
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    bottom:13,
    fontSize:16
  },
  backButton: {
    marginLeft: 5,
    width: 25,
    height: 30,
    resizeMode: "contain",
    bottom:2
  },
  clearButton: {
    marginLeft: 8,
    width: 30,
    height: 35,
    bottom:2,
    resizeMode: "contain",
  },
  searchList: {
    position: "absolute",
    zIndex: 3,
    padding: 5,
    color: "lightgrey",
    backgroundColor: "#f8f8f8",
    top: 35,
    left: 40,
    width: 300,
    maxHeight: 169,
  },
  listText: {
    fontSize: 18,
    padding: 3,
    borderColor: "lightgrey",
    borderBottomWidth: 2,
  },
});
