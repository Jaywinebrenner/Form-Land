import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { Formik } from 'formik';
import { AntDesign } from '@expo/vector-icons'


const ReviewForm = () => {

  return (

    <View>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: '',

        }}
        onSubmit={(values) => {
          console.log(values)
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
              placeholder='Email'
              onChangeText={formikProps.handleChange('email')}
              value={formikProps.values.email}
              />
            <TextInput
              style={styles.input}
              placeholder='phone'
              onChangeText={formikProps.handleChange('phone')}
              value={formikProps.values.phone}
              keyboardType='numeric'
              />

            <Button style={styles.submitButton} title='Submit' onPress={formikProps.handleSubmit}/>
                      <View>
                        <AntDesign style={styles.formLogo} name="form" size={32} color="darkgray" />

                        </View>
          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 15,
    height: 40,
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    borderRadius: 3,
    width: 200
  },
  formLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: -20
  },
  submitButton: {
    backgroundColor: 'firebrick',
    color: 'red'
  }
});



export default ReviewForm
