/* eslint-disable prettier/prettier */
// نور هشام محمود القطشان 120190581
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
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
    margin: 30,
    marginTop: 280,
    fontSize: 26,
    lineHeight: 40,
    fontWeight: '500',
    color: '#fff',
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 8,
    marginTop: 100,
    backgroundColor: '#E79115',
  },
  text: {
    fontSize: 22,
    fontWeight: '400',
    letterSpacing: 0.25,
    color: 'white',
  },
});
const Start = () => {
  return (
    <View style={styles.View}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require('../assets/7.jpg')}>
        <Text style={styles.text_head}>
          Your workouts start on May15,2023 for 4 times a week , Good luck!
        </Text>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>Let's start</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default Start;

