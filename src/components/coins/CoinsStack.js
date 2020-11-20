import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CoinsScreen from "./CoinsScreen";
import CoinDetailScreen from "./CoinsScreen"


/* createStackNavigator
Provides a way for your app to transition between screens where each 
new screen is placed on top of a stack. */

const Stack = createStackNavigator();

const CoinsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Coins" 
      component={CoinsScreen} 
      />
      <Stack.Screen 
      name="CoinDetail" 
      component={CoinDetailScreen} />
    </Stack.Navigator>
  );
};

export default CoinsStack;
