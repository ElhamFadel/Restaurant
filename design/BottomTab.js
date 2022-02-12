import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapScreen from "../screens/MapScreen"
import SettingsScreen from "../screens/SettingsScreen"
import HomeScreen from "../screens/HomeScreen"
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default Tabs