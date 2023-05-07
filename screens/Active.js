/* eslint-disable prettier/prettier */
// نور هشام محمود القطشان 120190581
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
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
    margin: 40,
    marginTop: 350,
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'cursive',
    lineHeight: 26,
    fontWeight: '500',
    color: '#fff',
  },
  picker: {
    width: 250,
    height: 50,
    margin: 10,
    padding: 10,
    fontSize: 28,
    color: '#000',
    backgroundColor: '#AEAEAE',
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
const Active = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={styles.View}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require('../assets/6.jpg')}>
        <Text style={styles.text_head}>
          How many times a week do you want to be active?
        </Text>
        <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="1 time a week" value="1 time a week" />
        <Picker.Item label="2 time a week" value="2 time a week" />
        <Picker.Item label="3 time a week" value="3 time a week" />
        <Picker.Item label="4 time a week" value="4 time a week" />
        <Picker.Item label="5 time a week" value="5 time a week" />
      </Picker>

        <TouchableOpacity style={styles.button1}  onPress={() => navigation.push('Start')}>
          <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
export default Active;
