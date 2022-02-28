import { ScrollView, StyleSheet,TouchableOpacity} from 'react-native'
import Card from './CardResturant'
import React, {  useEffect, useState } from 'react'
import {getResturants} from "../api/resturant"
import {filterResturants} from "../utils/filterResturants"
import Loading from './Loading'
import { useNavigation } from '@react-navigation/native'
import ResturanScreen from "../screens/ResturanScreen"

const CardFoodList = ({resultSearch}) => {
  const [isFetching, setIsFetch] = useState(false)
  const [data,setData] = useState([]);
  const navigation = useNavigation()

  useEffect(async ()=>{
  setIsFetch(true)
  const data = await getResturants();
 if(data){
  setData(data)
  setIsFetch(false)
 }
  },[])

useEffect(async()=>{
   setIsFetch(true)
   const result= await filterResturants(resultSearch)
   if(result){
      setData(result)
      setIsFetch(false)
   }
},[resultSearch])

  if (isFetching || !data) {
    return <Loading />;
  }

  return (
    <ScrollView  style={styles.container}>
     {  
       data.map((resturant)=>(
       <TouchableOpacity  onPress={()=>navigation.navigate('ResturanScreen')}>
       <Card resturant={resturant} key={resturant.userId}  />
       </TouchableOpacity>
       ))
     }
    </ScrollView>
  )
}

export default CardFoodList

const styles = StyleSheet.create({
   container: {
    marginHorizontal: 20,
  },
})