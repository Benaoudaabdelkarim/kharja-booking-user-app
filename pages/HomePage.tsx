import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import HomeLayout from '../layouts/HomeLayout';

function Home(): JSX.Element {
  return (
    <HomeLayout>
      <Text>home</Text>
    </HomeLayout>
  );
}
export default Home;
