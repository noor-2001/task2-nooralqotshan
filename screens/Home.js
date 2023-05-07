/* eslint-disable prettier/prettier */
// نور هشام محمود القطشان 120190581
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
const styles = StyleSheet.create({
  View: {
    flex: 1,
    backgroundColor: '#000',
  },
  logo: {
    width: 170,
    height: 170,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 780,
    width: 400,
  },
  text_head: {
    marginBottom: 380,
    fontSize: 22,
    textAlign: 'center',
    lineHeight: 30,
    fontWeight: '400',
    color: '#fff',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#E79115',
  },
  text: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'white',
  },
  login: {
    fontSize: 22,
    marginBottom: 30,
    fontWeight: '600',
    letterSpacing: 0.25,
    color: 'white',
  },
});
const Home = ({navigation}) => {
  return (
    <View style={styles.View}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require('../assets/1.jpg')}>
        <Image style={styles.logo} source={require('../assets/logo1.png')} />
        <Text style={styles.text_head}>
          Make yourself stronger than your excuses
        </Text>
        <TouchableOpacity style={styles.button1}  onPress={() => navigation.push('Account')}>
          <Text style={styles.text}>Get Started</Text>
        </TouchableOpacity>
          <Text onPress={() => navigation.push('Login')} style={styles.login}>Or login</Text>
      </ImageBackground>
    </View>
  );
};
export default Home;
