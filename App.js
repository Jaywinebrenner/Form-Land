import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReviewForm from './components/ReviewForm'
import TextBox from './components/TextBox';
import Home from './components/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>FORM LAND</Text>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 40
  }

});
