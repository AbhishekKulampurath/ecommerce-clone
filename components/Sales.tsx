import { View, Text, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native'
import React from 'react'

const items = [
    {
        image : require ("../assets/images/sale-1.png"),
        text  : "Sale-1"
    },
    {
      image : require ("../assets/images/sale-2.png"),
      text  : "Sale-2"
  },
  {
    image : require ("../assets/images/sale-3.png"),
    text  : "Sale-3"
}
]
export default function Sales() {
  return (
    <View>
    {items.map((item,index) => ( 
   
  <Image key = {index} source={item.image} 
      style={{
    width:400,
    height:250,
    marginTop : 5
    }} />
    ))}
    </View>  

  )
    //   <View
    //     key = {index}
    //     style={{marginTop :10, padding:15}}
    //   >
    //   <SalesImage image={item.image} />
    //   </View>

    // ))}   
    //  </TouchableOpacity>
  
}
