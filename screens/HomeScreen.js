import { StyleSheet,SafeAreaView} from 'react-native';
import React from 'react';
import SearchBarComponent from '../design/SearchBar';
import CardFoodList from '../design/CardFoodList';


const HomeScreen = () => {
  return (
   <SafeAreaView style={styles.container} >
   <SearchBarComponent />
   <CardFoodList />
   </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
   container : {
      flex: 1,
      padding: 20,
   }
});
