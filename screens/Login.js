/* eslint-disable prettier/prettier */
// نور هشام محمود القطشان 120190581
import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
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
    margin: 20,
    marginTop: 150,
    fontSize: 34,
    fontFamily: 'cursive',
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    width: 330,
    height: 50,
    margin: 10,
    borderBottomWidth: 1.5,
    padding: 10,
    borderRadius: 5,
    borderBottomColor: 'black',
    fontSize: 18,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 8,
    marginTop: 40,
    backgroundColor: '#E79115',
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: 'white',
  },
  password: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 50,
    letterSpacing: 0.25,
    color: 'white',
  },
});
const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require('../assets/3.jpg')}>
        <Text style={styles.text_head}>Welcome back!</Text>
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
        <Text style={styles.password}>Have you forgot your password?</Text>
        <TouchableOpacity style={styles.button1}  onPress={() => navigation.push('Name')}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
};
export default Login;
