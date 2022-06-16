import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";

const items = [
  {
    image: require("../assets/images/sale-1.png"),
    text: "Sale-1",
  },
  {
    image: require("../assets/images/sale-2.png"),
    text: "Sale-2",
  },
  {
    image: require("../assets/images/sale-3.png"),
    text: "Sale-3",
  },
  {
    image: require("../assets/images/sale-1.png"),
    text: "Sale-4",
  },
];
export default function Sales() {
  return (
    <View style={SaleStyle.page}>
      {items.map((item, index) => (
        <Image key={index} source={item.image} style={SaleStyle.card} />
      ))}
    </View>
  );
  //   <View
  //     key = {index}
  //     style={{marginTop :10, padding:15}}
  //   >
  //   <SalesImage image={item.image} />
  //   </View>

  // ))}
  //  </TouchableOpacity>
}

const SaleStyle = StyleSheet.create({
  card: {
    width: 400,
    height: 250,
    marginTop: 5,
  },
  page: {
    borderBottomWidth: 150,
  },
});
