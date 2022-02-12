import { Text as TextStyle } from "react-native";


const colors = {
  "black": "#000",
  "white": "#fff",
  "blue": "#00f",
  "red": "#f00",
  "green": "#0f0",
};


const typographies = {
  h1: {
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 32,
  }, 
  h2: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 28,
  }, 
  p1: {
    fontSize: 18,
    lineHeight: 24,
  }, 
  p2: {
    fontSize: 16,
    lineHeight: 22,
  },
  alert:{
    fontSize: 15,
    color: "#ff0000",
    fontWeight: 'bold',
    textTransform: 'uppercase',                
    }
};

export const Text = ({ color = "black", onPress = () => {}, style = {}, typography = "p1", value = "ERROR" }) => {
  const defaultStyles = {
    ...(typographies[typography]),
    color: colors[color],
  };
  return <TextStyle onPress={onPress} style={[defaultStyles, style]}>{value}</TextStyle>;
};