import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { AntDesign } from '@expo/vector-icons'


const ReviewForm = () => {

  return (
    <View>
      <AntDesign name="form" size={32} color="green" />
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
            placeholder='First Name'
            onChangeText={formikProps.handleChange('firstName')}
            value={formikProps.values.firstName}
            />
          <TextInput
            placeholder='Last Name'
            onChangeText={formikProps.handleChange('lastName')}
            value={formikProps.values.lastName}
            />
          <TextInput
            placeholder='Business / Organization'
            onChangeText={formikProps.handleChange('businessOrganization')}
            value={formikProps.values.businessOrganization}
            />
            <TextInput
              multiline
              placeholder='Type of Business'
              onChangeText={formikProps.handleChange('typeOfBusiness')}
              value={formikProps.values.typeOfBusiness}
              />
              <TextInput
                placeholder='Email'
                onChangeText={formikProps.handleChange('email')}
                value={formikProps.values.email}
                />
                <TextInput
                  placeholder='phone'
                  onChangeText={formikProps.handleChange('phone')}
                  value={formikProps.values.phone}
                  />

                <Button title='Submit' color='red' onPress={formikProps.handleSubmit}/>
        </View>
      )}
      </Formik>
    </View>
  )
}
export default ReviewForm
