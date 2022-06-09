import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

const tabs = [
    {
        image: require("../assets/images/menu.png"),
        text : "Menu"
    },
    {
        image: require("../assets/images/Myntra_logo.png"),
        text : "Logo"
    },
    {
        image: require("../assets/images/search-symbol.png"),
        text : "Search"
    },
    {
        image: require("../assets/images/notification.png"),
        text : "Notifications"
    },
    {
        image: require("../assets/images/heart.png"),
        text : "Wishlist"
    },
    {
        image: require("../assets/images/shopping-bag.png"),
        text : "Bag"
    }
]
export default function Navbar() {
  return (
    <ScrollView horizontal style={{paddingBottom : 20,paddingTop : 10, backgroundColor:"#fff"}} showsHorizontalScrollIndicator = {false}>
        <Image
         source={tabs[0].image}
         style = {{
             width : 30,
             height: 30,
             marginLeft :2,
             marginTop : 7,
             resizeMode:"contain"
         }}
         />
         <Image
         source={tabs[1].image}
         style = {{
             marginLeft : 10,
             width : 80,
             height: 33,
             marginTop : 7,
             resizeMode:"stretch"
         }}
         />
          <Image
         source={tabs[2].image}
         style = {{
             marginLeft : 120,
            width : 30,
             height: 30,
             marginTop : 7,
             resizeMode:"contain"
         }}
         />
          <Image
         source={tabs[3].image}
         style = {{
            marginLeft : 10,
            width : 30,
            height: 30,
            marginTop : 7,
             resizeMode:"contain"
         }}
         />
          <Image
         source={tabs[4].image}
         style = {{
            marginLeft : 10,
            width : 30,
            height: 30,
            marginTop : 7,
             resizeMode:"contain"
         }}
         />
          <Image
         source={tabs[5].image}
         style = {{
            marginLeft : 10,
            width : 30,
            height: 30,
            marginTop : 7,
             resizeMode:"contain"
         }}
         />
    </ScrollView>
  )
}