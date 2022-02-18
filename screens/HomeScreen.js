import { StyleSheet,SafeAreaView} from 'react-native';
import React,{useState} from 'react';
import SearchBarComponent from '../design/SearchBar';
import CardResturantList from '../design/CardResturantList';


const HomeScreen = () => {
 const [search, setSearch] = useState("");
  return (
   <SafeAreaView style={styles.container} >
   <SearchBarComponent setSearch={setSearch} value={search}  />
   <CardResturantList resultSearch={search} />
   </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
   container : {
      flex: 1,
      padding:13,
      paddingTop: 30,
   }
});
