const API_RESTURANT = 'https://raw.githubusercontent.com/ElhamFadel/Restaurant/master/data.json'
export const getResturants = async()=>{
    try{
     const response =  await fetch(`${API_RESTURANT}`);
     const json = await response.json()
     return json.restaurants
    }catch(error){
     console.log(error)
    }
  }