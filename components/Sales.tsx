import { View, Text, Image } from 'react-native'
import React from 'react'

const items = [
    {
        image : require ("../assets/images/sale-1.png"),
        text  : "Sale-1"
    },
]
export default function Sales() {
  return (
    <View>
      <Image source={items[0].image} 
      style={{
          width:400,
          height:250,
          marginTop : 5
      }}
      />
    </View>
  )
}