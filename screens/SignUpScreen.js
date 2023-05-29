import React from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

export default function SignUnScreen({ navigation, handleLogin }) {
  return (
   <View style={styles.container}>
      <View style={styles.mainbg}>
         <View style={styles.title}>
            <Text style={{fontSize: 35, color: '#000', fontWeight: '700'}}>Supa</Text>
            <Text style={{fontSize: 35, color: '#FEA04A', fontWeight: '700'}}>Menu</Text>
         </View>

         <Text style={{fontSize: 18, color: '#021453', fontWeight: '500', textAlign: 'center', marginTop: 20}}>Welcome ...</Text>
         <Text style={{fontSize: 16, color: '#D2D2D2', fontWeight: '500', textAlign: 'center', marginTop: 10, marginBottom: 30}}>Please fill in the information</Text>

         <View style={styles.group}>
            <View style={styles.iconContainer}>
               <Icon name="user" size={20} color="#888" />
            </View>
            <TextInput style={styles.input} placeholder="Full Name" placeholderTextColor="rgba(60, 76, 131, 0.7)"  />
         </View>

         <View style={styles.group}>
            <View style={styles.iconContainer}>
               <Icon name="phone" size={20} color="#888" />
            </View>
            <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="rgba(60, 76, 131, 0.7)"  />
         </View>

         <View style={styles.group}>
            <View style={styles.iconContainer}>
               <Icon name="mail" size={20} color="#888" />
            </View>
            <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="rgba(60, 76, 131, 0.7)"  />
         </View>

         <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.buttonText}>Proceed</Text>
         </TouchableOpacity>

         <View style={styles.line_section}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
         </View>

         <Text style={{fontSize: 16, color: '#D2D2D2', fontWeight: '500', textAlign: 'center', marginTop: 10, marginBottom: 30}}>If you have a PMG account</Text>

         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.buttonText}>Sign In</Text>
         </TouchableOpacity>
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#FEA04A",
   },
   mainbg: {
     padding: 20,
     top: 100,
     flex: 1,
     backgroundColor: "#fff",
     borderTopRightRadius: 30,
     borderTopLeftRadius: 30,
   },
   title: {
    flexDirection: 'row',
    justifyContent: 'center',
     alignItems: 'center',
   },
   group: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(177, 193, 250, 0.39)',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10
  },
  iconContainer: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    color: 'black',
    fontSize: 15,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginTop: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line_section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(177, 193, 250, 0.39)',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
    fontWeight: 'bold',
    fontSize: 16,
  },
 });
 