import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image, Alert } from "react-native";
import Icon from 'react-native-vector-icons/Feather'
import axios from "axios";

export default function SignInScreen({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = route.params;

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleValidation = () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }

    if (password.length < 4) {
      Alert.alert('Invalid Password', 'Password should be more than 5 characters long.');
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
      const response = await axios.post('http://192.168.56.1:8080/register/login', data);
      if(response.data) handleLogin();
    } catch (error) {
      console.error('Post error:', error);
    }
  };

  const handleSignIn = () => {
    if(handleValidation()){
      postData({email: email, password: password});
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainbg}>
         <View style={styles.title}>
            <Text style={{fontSize: 35, color: '#000', fontWeight: '700'}}>Supa</Text>
            <Text style={{fontSize: 35, color: '#FEA04A', fontWeight: '700'}}>Menu</Text>
         </View>

         <Text style={{fontSize: 18, color: '#021453', fontWeight: '500', textAlign: 'center', marginTop: 20}}>Welcome ...</Text>
         <Text style={{fontSize: 16, color: '#D2D2D2', fontWeight: '500', textAlign: 'center', marginTop: 10, marginBottom: 20}}>Sign in to continue</Text>

         <View style={styles.group}>
            <View style={styles.iconContainer}>
               <Icon name="mail" size={20} color="rgba(177, 193, 250, 0.5)" />
            </View>
            <TextInput style={styles.input} placeholder="Email" onChangeText={handleEmailChange} keyboardType="email-address" autoCapitalize="none" placeholderTextColor="rgba(60, 76, 131, 0.7)"  />
         </View>
         
         <View style={styles.group}>
            <View style={styles.iconContainer}>
               <Icon name="lock" size={20} color="rgba(177, 193, 250, 0.5)" />
            </View>
            <TextInput style={styles.input} placeholder="Password" placeholderTextColor="rgba(60, 76, 131, 0.7)" onChangeText={handlePasswordChange} secureTextEntry />
         </View>

         <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
         </TouchableOpacity>

         <View style={styles.line_section}>
            <View style={styles.line} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.line} />
         </View>

         <View style={[styles.group, {justifyContent: 'center',}]}>
            <Image source={require("../assets/google.png")} style={styles.socialImage}/>
            <Text style={styles.text}> Login with Google</Text>
         </View>

         <View style={[styles.group, {justifyContent: 'center'}]}>
            <Image source={require("../assets/facebook.png")} style={styles.socialImage}/>
            <Text style={styles.text}> Login with Facebook</Text>
         </View>

         <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={{color: '#FEA04A', textAlign: 'center', fontSize: 15, fontWeight: '600', marginTop: 5}} >Forgot Password?</Text>
         </TouchableOpacity>

         <View style={{justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
            <Text style={{fontSize: 15, fontWeight: '400', marginRight: 10, color: 'rgba(60, 76, 131, 0.7)'}}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
               <Text style={{color: '#FEA04A', textAlign: 'center', fontSize: 15, fontWeight: '600'}} >Register</Text>
            </TouchableOpacity>
         </View>
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
    top: 90,
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
   paddingVertical: 10,
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

 icon: {
   marginRight: 40,
 },
 text: {
   fontSize: 16,
   color: 'rgba(60, 76, 131, 0.7)',
   fontWeight: '500'
 },
 socialImage: {
   width: 30,
   height: 30
 }
});
