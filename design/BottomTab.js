import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from "../screens/MapScreen"
import SettingsScreen from "../screens/SettingsScreen"
import HomeScreen from "../screens/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

Tab_Icon ={
  Restaurant : "md-restaurant",
  Map : "md-map",
  Settings : "md-settings"
}
const tabBarIcon = (iconName)=>({size,color})=>(
  <Ionicons name={iconName} size={size} color={color} />
)
const screenOptions = ({ route }) => {
   const iconName = Tab_Icon[route.name];
    return {
      tabBarIcon:tabBarIcon(iconName)
    };
  };

function Tabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={screenOptions}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Restaurant"
       component={HomeScreen}
       options={{
          headerShown: false
        }} 
        />
      <Tab.Screen name="Map"
       component={MapScreen} 
       options={{
          headerShown: false
        }}
        />
      <Tab.Screen name="Settings"
       component={SettingsScreen} 
       options={{
          headerShown: false
        }}  />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Tabs