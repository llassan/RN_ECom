import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import CartScreen from "../screens/CartScreen";
import WishListScreen from "../screens/WishListScreen";
import UserScreen from "../screens/UserScreen";
import Groceries from "../screens/Categories/Groceries";
import Innerwears from "../screens/Categories/Innerwears";
import Boots from "../screens/Categories/Boots";
import Sandals from "../screens/Categories/Sandals";
import FlipFlops from "../screens/Categories/FlipFlops";
import Watches from "../screens/Categories/Watches";
import TShirts from "../screens/Categories/TShirts";

const Stack = createStackNavigator();
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "AQUIRE" }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Groceries" component={Groceries} />
      <Stack.Screen
        name="TShirts"
        component={TShirts}
        options={{ title: "T Shirts" }}
      />
      <Stack.Screen name="Watches" component={Watches} />
      <Stack.Screen name="FlipFlops" component={FlipFlops} />
      <Stack.Screen name="Sandals" component={Sandals} />
      <Stack.Screen name="Boots" component={Boots} />
      <Stack.Screen name="Innerwears" component={Innerwears} />
    </Stack.Navigator>
  );
};
const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Wishlist" component={WishListScreen} />
    </Stack.Navigator>
  );
};
export { HomeStackNavigator, ProfileStackNavigator };
