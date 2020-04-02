import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ReviewForm from './components/ReviewForm'


export default function App() {
  return (
    <View style={styles.container}>
      <Text>FORM LAND</Text>
      <ReviewForm/>
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
});
