import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../design/Button'

const StartScreen = () => {
  return (
    <View>
      <Text>StartScreen</Text>
      <Button
        title="Login"
        nameIcon="lock"
      />
      <Button
        title="Register"
        nameIcon="lock"
      />
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({})