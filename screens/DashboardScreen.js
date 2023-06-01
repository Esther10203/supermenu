import React from "react";
import { View, Button, Text, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function DashboardScreen({ handleLogout }) {
  const onLogout = () => {
    handleLogout();
  };

  const handleSubmit = () => {
    Alert.alert("Entered Text", text);
  };

  return (
    <View style={styles.cont}>
      <View style={styles.search}>
        <Button onPress={handleSubmit} title="Search" color="#FEA04A" />
        <TextInput
          style={styles.input}
          placeholder="Search for your preferred restaurant"
          placeholderTextColor="#888"
        />
      </View>

      <Text style={styles.or}>Or</Text>
      <Ionicons name="scan" size={50} color="black" />
      <Text style={styles.or}>Scan, Pay & Enjoy</Text>
      <Button style={styles.logout} title="Logout" onPress={onLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    backgroundColor: "#FEA04A",
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 10,
    width: "80%",
  },
  input: {
    flex: 1,
    height: 40,
    color: "#000",
  },
  icon: {
    marginRight: 10,
  },
  or: {
    marginVertical: 70,
    fontSize: 20,
  },
  logout: { marginTop: 40, backgroundColor: "white" },
});
