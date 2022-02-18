import { ScrollView, StyleSheet} from 'react-native'
import Card from './CardResturant'
import React, {  useEffect, useState } from 'react'
import {getResturants} from "../api/resturant"
import {filterResturants} from "../utils/filterResturants"
import Loading from './Loading'

const CardFoodList = ({resultSearch}) => {
  const [isFetching, setIsFetch] = useState(false)
  const [data,setData] = useState([]);

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
       <Card resturant={resturant} key={resturant.userId}  />
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