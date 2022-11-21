import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Home";
import ListScreen from "./ListItems";
import AddScreen from "./Add";
import DetailScreen from "./Details";

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    {/* <Screen name="Home" component={HomeScreen} /> */}
    <Screen name="List" component={ListScreen} />
    <Screen name="Add" component={AddScreen} />
    {/* <Screen name="Update" component={DetailScreen} /> */}
  </Navigator>
);

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
