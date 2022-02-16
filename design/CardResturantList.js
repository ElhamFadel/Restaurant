import { ScrollView, StyleSheet} from 'react-native'
import Card from './CardResturant'
import React, {  useEffect, useState } from 'react'
import Loading from './Loading'

const CardFoodList = () => {
  const [isFetching, setIsFetch] = useState(false)
  const [data,setData] = useState([]);

  const fetchData = async()=>{
    setIsFetch(true)
    try{
     const response =  await fetch('https://raw.githubusercontent.com/ElhamFadel/Restaurant/master/data.json');
     const json = await response.json()
     setData(json.restaurants)
    }catch(error){
     console.log(error)
    }
    setIsFetch(false)
  }
  useEffect(()=>{
  fetchData()
  console.log(data)
  },[])

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