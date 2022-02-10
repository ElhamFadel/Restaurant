import { Button as ButtonStyle } from 'react-native-elements'
import React from 'react'

const defaultStyle = 
{
     width: 160,
     marginHorizontal: 100,
     marginVertical: 10,
}

const Button = ({title,nameIcon='',style={},icon={}}) => {
  return (
    <ButtonStyle
     title={title}
    buttonStyle={{
        backgroundColor: '#5f5ebd',
        borderWidth: 2,
        borderColor: '#5f5ebd',
        borderRadius: 3,
     }}
     containerStyle={[defaultStyle,style]}
     icon= {nameIcon ? {name: nameIcon, type: 'font-awesome', color: '#fff'} : null}
     titleStyle={{ fontWeight: 'thin',textTransform: 'uppercase',fontSize: 13,color: 'white',paddingHorizontal: 10 }}
    />
  )
}

export default Button

