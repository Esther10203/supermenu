import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
   const [value, setValue] = useState(0);

  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increaseValue = () => {
    setValue(value + 1);
  };

  const data = [{},{},{}]
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <View style={styles.text}>
          <Icon name="chevron-left" size={28} color='#FEA04A' style={{backgroundColor: '#E7EEFD', padding: 8}} onPress={() => navigation.goBack()} />
        </View>
      </View>

      <Text style={{marginBottom: 10, fontSize: 18, fontWeight: '500', textAlign: 'right'}}>Choose Kigali</Text>

      <Text style={{marginBottom: 10, fontSize: 18, color: '#FEA04A', fontWeight: '500', textAlign: 'right'}}>Drinks</Text>

      {data.map(() => (
            <View style={[styles.row, {backgroundColor: '#F3F7FD', padding: 10, marginBottom: 10, alignItems: 'center', width: '100%'}]}>
               <Image source={require('../assets/download.jpg')} style={styles.image} />
               <View>
                  <Text style={{marginTop: 5,color: 'rgb(191, 191, 191)', maxWidth: '100%', fontSize: 12}}>Kaffir Lime Vodika , Lemongrass, Ginger, Citrus</Text>
                  <Text style={{fontSize: 14, fontWeight: '500', marginTop: 5}}>Tom Yummy - 12. 5</Text>

                  <View style={{maxWidth: '100%',  flexDirection: "row", marginTop: 5}}>
                     <Text style={{fontWeight: '600', color:'#FEA04A', fontSize: 16}}>Frw 5,000</Text>
                     <View style={styles.values}>
                        <TouchableOpacity style={styles.button} onPress={decreaseValue}>
                           <Text style={{color:'#FEA04A', fontWeight: '500', fontSize: 16}}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.value}>{value}</Text>
                        <TouchableOpacity style={styles.button} onPress={increaseValue}>
                           <Text style={{color:'#FEA04A', fontWeight: '500', fontSize: 16}}>+</Text>
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            </View>
      ))}
      
      <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10}}>
         <Text style={{color: '#FEA04A', fontSize: 15, fontWeight: 500}}>More drinks</Text>
         <Icon name="arrow-right" color='#FEA04A' size={20} style={{marginLeft: 10}}/>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
         <Text style={{fontSize: 16, fontWeight: '500'}}>Total</Text>
         <Text style={{fontSize: 16, fontWeight: '500', color:'#FEA04A' }}>Frw 16,000</Text>
      </View>

      <TouchableOpacity style={styles.submit} onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.buttonText}>Proceed to checkout</Text>
         </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: 'white',
    paddingHorizontal: 13,
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
      width: 60,
      height: 60,
      borderRadius: 5,
      marginRight: 10,
   },
   values: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      marginLeft: 50
    },
    button: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
    },
    submit: {
      backgroundColor: '#FEA04A',
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 10
    },
    buttonText: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
      fontWeight: '500'
    },
    value: {
      marginHorizontal: 10,
      fontSize: 16,
    },
});
