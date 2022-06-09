import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Sales from '../components/Sales'

export default function Home() {
  return (
    <SafeAreaView>
      <Navbar/>
      <Categories/>
      <Sales/>
    </SafeAreaView>
  )
}