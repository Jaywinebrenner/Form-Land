

import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';

const TextBox = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessOrganization, setBusinessOrganization] = useState('');
  const [typeOfBusiness, setTypeOfBusiness] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return(
    <View style={styles.container}>

    <Text>First Name</Text>
    <TextInput
    autoCapitalize='words'
    style={styles.input}
    placeholder='e.g. Meredith'
    onChangeText={(val) => setFirstName(val)}
    />

    <Text>Last Name</Text>
    <TextInput
    autoCapitalize='words'
    style={styles.input}
    placeholder='e.g. Dronesy'
    onChangeText={(val) => setLastName(val)}
    />

    <Text>Business / Organization</Text>
    <TextInput
    autoCapitalize='words'
    style={styles.input}
    placeholder='Drone Lover Inc.'
    onChangeText={(val) => setBusinessOrganization(val)}
    />

    <Text>Type of Business</Text>
    <TextInput
    autoCapitalize='words'
    style={styles.input}
    placeholder='e.g. Realestate Company, Media Company'
    onChangeText={(val) => setTypeOfBusiness(val)}
    />

    <Text>Email</Text>
    <TextInput
    autoCompleteType='email'
    style={styles.input}
    placeholder='iwannadrone@dronelover.org'
    onChangeText={(val) => setEmail(val)}
    />

    <Text>Phone</Text>
    <TextInput
    keyboardType='numeric'
    style={styles.input}
    placeholder='503-555-5555'
    onChangeText={(val) => setPhone(val)}
    />

    <Text>{firstName}{lastName}. {businessOrganization}, {typeOfBusiness}, {email}, {phone}</Text>

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    borderRadius: 3,
    width: 160
  }
});


export default TextBox
