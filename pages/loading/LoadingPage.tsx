import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeLayout from '../../layouts/HomeLayout';

function Loading({navigation, route}: any): JSX.Element {

  useEffect(() => {
    console.log('waiting..............');
    setTimeout(() => {
      getStringValue('TOKEN');
    }, 0);
  });

  const getStringValue = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        navigation.navigate('Home',);
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.log('Error retrieving string value:', error);
    }
  };

  return (
    <HomeLayout>
      <Text>Loading...</Text>
    </HomeLayout>
  );
}
export default Loading;
