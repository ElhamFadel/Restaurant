import React from 'react';
import { View } from 'react-native';
import {  Card, Rating } from 'react-native-elements';
import { SvgXml } from 'react-native-svg';
import open from "../assets/open";
import { Text } from './Text';
const CardComponent = ({isOpenNow=true,isClosesTemporarily=true}) => {
  return (
    <>
          <Card
          containerStyle = {{
            borderRadius: 5,
            width: '100%',
            margin: 0,
            boxShadow: '5px 5px 5px 5px rgba(0,0,0,0.5)',
            marginBottom: 10,
          }}
          >
            <Card.Image
              style={{ padding: 0,height: 200, width: '100%' }}
              source={{
                uri:
                  'https://www.foodiesfeed.com/wp-content/uploads/2021/01/hot-shakshuka-819x1024.jpg',
              }}

            />
            <Card.Title style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold',alignSelf:'flex-start' }}>
            Zuni Cafe</Card.Title>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Rating
            type="star"
            fractions={1}
            startingValue={3}
            readonly
            imageSize={25}
            style={{ alignSelf: 'flex-start',marginBottom:10 }}
          />
          {
            isClosesTemporarily && (
              <Text typography="alert" value='CLOSED TEMPORARILY' color="red" />
             )
          }

          {
            isOpenNow && <SvgXml
            xml={open}
            width="30"
            height="30"
            style={{
              alignSelf: 'flex-start',
            }}
          />
          }
          
          </View>
            <Text typography="p2" style={{fontWeight: 'bold'}}  value="100 m away"  />
          </Card>
    </>
  );
};


export default CardComponent;