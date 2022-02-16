import { StyleSheet,SafeAreaView} from 'react-native';
import React from 'react';
import SearchBarComponent from '../design/SearchBar';
import CardResturantList from '../design/CardResturantList';


const HomeScreen = () => {
  return (
   <SafeAreaView style={styles.container} >
   <SearchBarComponent />
   <CardResturantList />
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
