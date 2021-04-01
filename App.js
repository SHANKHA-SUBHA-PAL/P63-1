import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './Screens/HomeScreen'
export default function App() {
  return (
    <Homescreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
