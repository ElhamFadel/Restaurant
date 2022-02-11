import { NavigationContainer } from '@react-navigation/native';
import { Text,View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import StartScreen from './screens/StartScreen';
import { StatusBar } from 'expo-status-bar';
import Navigation from './design/navigation';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <>
    <StatusBar style="auto" />
    <Navigation />
    </>
  );
}


