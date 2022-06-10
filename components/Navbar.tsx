import { View, Text, Image, ScrollView, TouchableOpacity, TouchableOpacityComponent } from 'react-native'
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
      
    <ScrollView horizontal style={{paddingBottom : 5,paddingTop : 7, backgroundColor:"#fff"  }} showsHorizontalScrollIndicator = {false}>
        <TouchableOpacity>
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
         </TouchableOpacity>
         <TouchableOpacity>
         <Image
         source={tabs[1].image}
         style = {{
             marginRight:120,
             marginLeft : 10,
             width : 80,
             height: 33,
             marginTop : 7,
             resizeMode:"stretch"
         }}
         />
         </TouchableOpacity>
         <TouchableOpacity>
          <Image
         source={tabs[2].image}
         style = {{
             
            width : 30,
             height: 30,
             marginTop : 7,
             resizeMode:"contain"
         }}
         />
         </TouchableOpacity>
         <TouchableOpacity>
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
         </TouchableOpacity>
         <TouchableOpacity>
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
         </TouchableOpacity>
         <TouchableOpacity>
          <Image
         source={tabs[5].image}
         style = {{
            marginLeft : 10,
            width : 30,
            height: 30,
            marginTop : 6,
             resizeMode:"contain"
         }}
         />
         </TouchableOpacity>
    </ScrollView>
    
  )
}