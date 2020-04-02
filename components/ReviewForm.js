import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { AntDesign } from '@expo/vector-icons'


const ReviewForm = () => {

  return (
    <View>
      <AntDesign name="form" size={32} color="darkgray" />
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          businessOrganization: '',
          typeOfBusiness: '',
          email: '',
          phone: '',
          payment: ''
        }}
        onSubmit={(values) => {

        }}
        >
        {(formikProps) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='First Name'
              onChangeText={formikProps.handleChange('firstName')}
              value={formikProps.values.firstName}
              />
            <TextInput
              style={styles.input}
              placeholder='Last Name'
              onChangeText={formikProps.handleChange('lastName')}
              value={formikProps.values.lastName}
              />
            <TextInput
              style={styles.input}
              placeholder='Business / Organization'
              onChangeText={formikProps.handleChange('businessOrganization')}
              value={formikProps.values.businessOrganization}
              />
            <TextInput
              multiline
              style={styles.input}
              placeholder='Type of Business'
              onChangeText={formikProps.handleChange('typeOfBusiness')}
              value={formikProps.values.typeOfBusiness}
              />
            <TextInput
              style={styles.input}
              placeholder='Email'
              onChangeText={formikProps.handleChange('email')}
              value={formikProps.values.email}
              />
            <TextInput
              style={styles.input}
              placeholder='phone'
              onChangeText={formikProps.handleChange('phone')}
              value={formikProps.values.phone}
              />

            <Button title='Submit' backgroundColor='blue' color='red' onPress={formikProps.handleSubmit}/>
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60
  },
});



export default ReviewForm
