import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon, Rating } from 'react-native-elements';
import { SvgXml } from 'react-native-svg';
import open from "../assets/open";
const CardComponent = ({isOpenNow=true,isClosesTemporarily=true}) => {
  return (
    <>
          <Card
          containerStyle = {{
            borderRadius: 5,
            width: '100%',
            margin: 0,
          }}
          >
            <Card.Image
              style={{ padding: 0 }}
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
              <Text style={{
                fontSize: 15,
                color: '#ff0000',
                fontWeight: 'bold',
                textTransform: 'uppercase',                
              }}>
                CLOSED TEMPORARILY
              </Text>
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
            <Text style={{fontSize: 15, fontWeight: 'bold'}} >
               100 m away
            </Text>
          </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fonts: {
    marginBottom: 8,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default CardComponent;