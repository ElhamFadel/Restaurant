import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StartScreen from './screens/StartScreen';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Start" component={StartScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}


