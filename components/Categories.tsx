import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'

const items = [
    {
        image : require ("../assets/images/men.png"),
        text  : "Men"
    },
    {
        image : require ("../assets/images/women.png"),
        text  : "Women"
    },
    {
        image : require ("../assets/images/kids.png"),
        text  : "Kids"
    },
    {
        image : require ("../assets/images/footwear.png"),
        text  : "Footwear"
    }
]

export default function Categories() {
  return (
    
    <View 
    style ={{
        marginTop:5,
        backgroundColor:'#fff',
        paddingVertical :10,
    }}
    >
      <ScrollView horizontal scrollEnabled={false}>
          {items.map((item,index) => (
          <View key={index} style={{alignItems:"flex-start",marginRight:25, marginLeft:10}}>
          <Image source={item.image}
           style ={{
              width:65,
              height:55,
              resizeMode:"contain"
          }}
          />
          <Text style={{fontSize:13, fontWeight :"500",alignSelf:"center"}} >{item.text}</Text>

      </View>
      ))}
      
      </ScrollView>
      </View>
    
  )
}