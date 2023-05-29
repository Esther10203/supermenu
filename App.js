import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, View, Text, StyleSheet } from "react-native";
import { CommonActions } from "@react-navigation/native";

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

  const DashboardStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        initialParams={{ handleLogout }}
      />
    </Stack.Navigator>
  );

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
    <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: styles.tab}}>
      <Tab.Screen name="Dashboard" component={() => <DashboardScreen handleLogout={handleLogout} />} />
      <Tab.Screen name="Notification" component={() => <RestorantScreen  />} />
      <Tab.Screen name="Restorant" component={() => <RestorantScreen  />} />
      <Tab.Screen name="Recent" component={() => <RestorantScreen  />} />
      <Tab.Screen name="Cart" component={() => <CartScreen  />} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <DashStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    bottom: 0,
    elevation: 0,
    backgroundColor: 'white',
    height: 70,
    borderRadius: 40,
    elevation: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  }
})
export default App;
