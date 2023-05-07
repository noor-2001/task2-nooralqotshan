/* eslint-disable prettier/prettier */
// نور هشام محمود القطشان 120190581
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
const styles = StyleSheet.create({
  View: {
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
    margin: 25,
    marginTop: 300,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'cursive',
    lineHeight: 30,
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
});
const Name = ({navigation}) => {
  return (
    <View style={styles.View}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require('../assets/4.jpg')}>
        <Text style={styles.text_head}>
          It's great that you're here! First things first, What should we call
          you?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor={'#fff'}
        />
        <TouchableOpacity style={styles.button1}  onPress={() => navigation.push('Date')}>
          <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default Name;
