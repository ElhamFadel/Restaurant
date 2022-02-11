import { StyleSheet,  View,ImageBackground } from 'react-native'
import React from 'react'
import Button from '../design/Button'
import homeImage from "../assets/home_bg.jpg"
import { Text } from '../design/Text'

const StartScreen = () => {
  return (
    <View  style={styles.container}>
      <ImageBackground source={homeImage}
      imageStyle={{
        opacity: .8,
      }}
       resizeMode="cover" style={styles.image} >
      <View style={styles.content}>
      <Text typography="h1" value="MealsToGo" />
      <View style={styles.wrapperBox}>
      <Button
        title="Login"
        nameIcon="lock"
      />
      <Button
        title="Register"
        nameIcon="lock"
      />
      </View>
      </View>
       </ImageBackground>
    </View>
  )
}

export default StartScreen

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent:'center',
    alignContent:'center',
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  content:{
   flex: 1,
   justifyContent:'center',
   alignContent:'center',
  },
  wrapperBox:{
     backgroundColor:'rgba(253, 253,253, 0.5)',
     width:250,
     height:250,
  }
})