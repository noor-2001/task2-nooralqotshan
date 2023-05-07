/* eslint-disable prettier/prettier */
// نور هشام محمود القطشان 120190581
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 780,
    width: 400,
  },
  text_head: {
    margin: 30,
    marginTop: 130,
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'cursive',
    lineHeight: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    width: 330,
    height: 40,
    margin: 10,
    borderBottomWidth: 1.5,
    padding: 10,
    borderRadius: 5,
    borderBottomColor: 'black',
    fontSize: 16,
  },
  ViewInput:{
    marginBottom: 40,

  },
  chectext:{
    color: '#fff',
    fontSize: 15,
    marginLeft: 8,

  },
  checkview:{
    flexDirection: 'row',
    width: 400,
    marginLeft: 60,
    marginTop: 10,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 70,
    borderRadius: 8,
    marginTop: 30,
    backgroundColor: '#E79115',
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: 'white',
  },
});
const Account = ({navigation}) => {
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);

  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require('../assets/2.jpg')}>
        <Text style={styles.text_head}>
          Add your details below to set up your account ...
        </Text>
        <View style={styles.ViewInput}>
          <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={'#fff'}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor={'#fff'}
        />
        </View>
        <View style={styles.checkview}>
          <CheckBox
          tintColors={{ true: '#E79115', false: '#fff' }}
          value={isSelected1}
          onValueChange={setSelection1}
        />
        <Text style={styles.chectext}>I've read the privacy policy</Text>
        </View>
        <View style={styles.checkview}>
          <CheckBox
          tintColors={{ true: '#E79115', false: '#fff' }}
          value={isSelected2}
          onValueChange={setSelection2}
        />
        <Text style={styles.chectext}>I accept the terms and conditions</Text>
        </View>
        <TouchableOpacity style={styles.button1}  onPress={() => navigation.push('Name')}>
          <Text style={styles.text}>Create account</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};
export default Account;
