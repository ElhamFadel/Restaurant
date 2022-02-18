import {getResturants} from "../api/resturant"
export const filterResturants = async(query) =>{
   const resturants = await  getResturants();
   return resturants.filter(resturant =>resturant.restaurantName.toLowerCase().includes(query.toLowerCase())) ?? [];
}