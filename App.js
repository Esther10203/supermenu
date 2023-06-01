import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Screens
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import DashboardScreen from "./screens/DashboardScreen";
import RestorantScreen from "./screens/RestorantScreen";
import { Icon } from "react-native-vector-icons/Feather";
import CartScreen from "./screens/CartScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: "Sign In" }}
        initialParams={{ handleLogin }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Sign Up" }}
      />
    </Stack.Navigator>
  );

  const DashStack = () => (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tab,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let iconColor;
          let bg;
          if (route.name === "Dashboard") {
            iconName = "ios-home";
          } else if (route.name === "Notification") {
            iconName = "ios-notifications";
          } else if (route.name === "Restorant") {
            iconName = "ios-restaurant";
          } else if (route.name === "Recent") {
            iconName = "ios-time";
          } else if (route.name === "Cart") {
            iconName = "ios-cart";
          }
          iconColor = focused ? "orange" : "black";
          bg = focused ? "rgba(155, 153, 140, 0.5)" : "white";
          return (
            <Ionicons
              name={iconName}
              size={size}
              color={iconColor}
              backgroundColor={bg}
              style={{ padding: 10 , borderRadius: 50}}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={() => <DashboardScreen handleLogout={handleLogout} />}
      />
      <Tab.Screen name="Notification" component={() => <RestorantScreen />} />
      <Tab.Screen name="Restorant" component={() => <RestorantScreen />} />
      <Tab.Screen name="Recent" component={() => <RestorantScreen />} />
      <Tab.Screen name="Cart" component={() => <CartScreen />} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      {isLoggedIn ? <DashStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tab: {
    position: "absolute",
    bottom: 0,
    elevation: 0,
    backgroundColor: "white",
    height: 60,
    borderRadius: 40,
    elevation: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  },
});
export default App;
