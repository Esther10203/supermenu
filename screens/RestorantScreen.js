import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function RestorantScreen() {
   const data = [{},{},{},{}]
  const navigation = useNavigation();
  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <View style={styles.text}>
          <Icon name="chevron-left" size={28} color='#FEA04A' style={{backgroundColor: '#E7EEFD', padding: 8}} onPress={() => navigation.goBack()} />
        </View>
        <View style={{marginLeft: 10}}>
          <TextInput style={{padding: 8}} placeholder="Search ..." placeholderTextColor="rgba(60, 76, 131, 0.7)"  />
        </View>
      </View>

      <View style={styles.line} />

      <Text style={{marginVertical: 20, color: '#FEA04A', fontWeight: '500'}}>Nearby Restaurant</Text>

      {data.map((key) => (
            <View key={key} style={[styles.row, {backgroundColor: '#F3F7FD', padding: 10, marginBottom: 10}]}>
            <Image source={require('../assets/download.jpg')} style={styles.image} />
            <View>
               <Text style={{fontSize: 17, fontWeight: '500', marginTop: 5}}>Choose Kigali</Text>
               <Text style={{marginTop: 5,color: 'rgb(191, 191, 191)'}}>World, Africa, Pizzeria, Coffee</Text>
            </View>
            </View>
      ))}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 40
  },
  row: {
    flexDirection: "row",
  },
  line: {
      width: '100%',
      height: 1,
      marginTop: 20,
      backgroundColor: 'rgba(60, 76, 131, 0.5)',
   },
   image: {
      width: 70,
      height: 70,
      borderRadius: 5,
      marginRight: 10,
   },
});
