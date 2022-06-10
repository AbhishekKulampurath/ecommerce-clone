import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import Categories from '../components/Filter'
import Sales from '../components/Sales'
import Filter from '../components/Filter'


export default function Home() {
  return (
    <SafeAreaView>
      <Navbar/>
      <Filter/>
      <ScrollView>
        <Sales/>
      </ScrollView>
    </SafeAreaView>
  );
}