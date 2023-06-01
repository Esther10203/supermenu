import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Feather'
import axios from 'axios';

export default function SignUnScreen({ navigation, handleLogin }) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleValidation = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }

    if (password.length < 4) {
      Alert.alert('Invalid Password', 'Password should be more than 5 characters long.');
      return false
    } 

    if(fullName === ""){
      Alert.alert('Invalid Full Name', 'Please enter a valid full name');
      return false
    }

    if(phoneNumber === ""){
      Alert.alert('Invalid Phone number', 'Please enter a valid phone number');
      return false
    }

    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const postData = async (data) => {
    try {
      console.log(data);
      const response = await axios.post('http://192.168.56.1:8080/register/save', data);
      if(response.data) navigation.navigate("SignIn");
    } catch (error) {
      console.error('Post error:', error);
    }
  };


  const handleRegister = () => {
    if(handleValidation()){
      postData({fullName: fullName, phone: phoneNumber, email: email, password: password});
    }
    

  }
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
            <TextInput style={styles.input} placeholder="Full Name" onChangeText={(text) => setFullName(text)}  placeholderTextColor="rgba(60, 76, 131, 0.7)"  />
         </View>

         <View style={styles.group}>
            <View style={styles.iconContainer}>
               <Icon name="phone" size={20} color="#888" />
            </View>
            <TextInput style={styles.input} placeholder="Phone Number" onChangeText={(text) => setPhoneNumber(text)}  placeholderTextColor="rgba(60, 76, 131, 0.7)"  />
         </View>

         <View style={styles.group}>
            <View style={styles.iconContainer}>
               <Icon name="mail" size={20} color="#888" />
            </View>
            <TextInput style={styles.input} placeholder="Your Email" onChangeText={(text) => setEmail(text)}  placeholderTextColor="rgba(60, 76, 131, 0.7)"  />
         </View>

         <View style={styles.group}>
            <View style={styles.iconContainer}>
               <Icon name="lock" size={20} color="#888" />
            </View>
            <TextInput style={styles.input} placeholder="Your Password" onChangeText={(text) => setPassword(text)}  placeholderTextColor="rgba(60, 76, 131, 0.7)"  />
         </View>

         <TouchableOpacity style={styles.button}  onPress={handleRegister}>
            <Text style={styles.buttonText}>Proceed</Text>
         </TouchableOpacity>

         <View style={styles.line_section}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
         </View>

         <Text style={{fontSize: 16, color: '#D2D2D2', fontWeight: '500', textAlign: 'center', marginTop: 5, marginBottom: 10}}>If you have a PMG account</Text>

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
 