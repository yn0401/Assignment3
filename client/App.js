import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import DetailsScreen from './screens/Details';
import AppNavigation from './screens/Navigation';
// import store from "./redux/stores/store";

export default function App() {
  return (
    // <Provider>
      // <AppNavigation />
      <DetailsScreen/>
      //hihi
    // </Provider>
  );
}
