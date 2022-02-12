import { ScrollView, StyleSheet} from 'react-native'
import Card from './CardFood'
import React from 'react'

const CardFoodList = () => {
  return (
    <ScrollView>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </ScrollView>
  )
}

export default CardFoodList

const styles = StyleSheet.create({})