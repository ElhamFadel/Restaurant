import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import {  StyleSheet } from 'react-native';


const SearchBarComponent = () => {
  const [search, setSearch] = useState("");
  return (
      <SearchBar
        onChangeText={(text) => setSearch(text)}
        value={search}
        lightTheme={true}
        containerStyle={{
          padding: 0,
          border:0,
          boxShadow: "0px 0px 10px 10px #000",
        }}
        inputContainerStyle={{
           backgroundColor: '#fff',
           borderRadius:7,
       }}
       rightIconContainerStyle={{
         width:2,
          height:2,
       }}
        placeholder="Search Here ..."
      />
  );
};

const styles = StyleSheet.create({

});

export default SearchBarComponent;