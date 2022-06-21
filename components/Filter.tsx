import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";

const filters = [
  {
    image: require("../assets/images/discount.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/men.png"),
    text: "Men",
  },
  {
    image: require("../assets/images/women.png"),
    text: "Women",
  },
  {
    image: require("../assets/images/kids.png"),
    text: "Kids",
  },
  {
    image: require("../assets/images/footwear.png"),
    text: "Footwear",
  },
  {
    image: require("../assets/images/makeup.png"),
    text: "Makeup",
  },
  {
    image: require("../assets/images/accessories.png"),
    text: "Accessories",
  },
];

export default function Filter() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingVertical: 3,
        height:90,
        bottom:5
      }}
    >
      <ScrollView
        horizontal
        scrollEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {filters.map((item, index) => (
          <View
            key={index}
            style={{
              alignItems: "flex-start",
              marginRight: 25,
              marginLeft: 10,
              marginTop:6
            }}
          >
            <TouchableOpacity>
              <Image
                source={item.image}
                style={{
                  width: 65,
                  height: 55,
                  resizeMode: "contain",
                }}
              />

              <Text
                style={{ fontSize: 13, fontWeight: "500", alignSelf: "center" }}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
