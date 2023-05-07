// نور هشام محمود القطشان 120190581
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Account from './screens/Account';
import Login from './screens/Login';
import Name from './screens/Name';
import Date from './screens/Date';
import Active from './screens/Active';
import Start from './screens/Start';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#fff',
          title: '',
          headerStyle: {
            backgroundColor: '#121212',
          },
        }}>
        <Stack.Screen
          name="Home"
          options={{headerShown: false}}
          component={Home}
        />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Date" component={Date} />
        <Stack.Screen name="Active" component={Active} />
        <Stack.Screen name="Start" component={Start} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
