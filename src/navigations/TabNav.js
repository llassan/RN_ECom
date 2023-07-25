import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import UserScreen from "../screens/UserScreen";
import { AntDesign } from "@expo/vector-icons";
import { HomeStackNavigator, ProfileStackNavigator } from "./StackNav";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const TabIcons = {
  Home: "home",
  Cart: "shoppingcart",
  User: "user",
};

export const TabNav = () => {
  const item = useSelector((state) => state.cart.item);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ size, color }) => {
          const iconName = TabIcons[route.name];
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{ tabBarBadge: item }}
      />
      <Tab.Screen
        name="User"
        component={ProfileStackNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
