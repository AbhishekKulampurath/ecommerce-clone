import { View, Text, FlatList } from "react-native";
import React from "react";

const SearchData = [
  { id: "1", title: "First Item" },
  { id: "2", title: "Second Item" },
  { id: "3", title: "Third Item" },
  { id: "4", title: "Fourth Item" },
];

export default function SearchBar() {
  return (
    <FlatList
      data={SearchData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
}
