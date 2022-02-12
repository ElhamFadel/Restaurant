import BottomTab from "./design/BottomTab"
import { StatusBar } from 'expo-status-bar';
import Navigation from './design/navigation';
export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <Navigation />
    <BottomTab />
    </>
  );
}


