import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './ReviewForm'

const Home = () => {

  const [ modalOpen, setModalOpen] = useState(false)

  return(
    <View>
      <Modal
      visible={modalOpen}
      animationType='slide'
      >
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalText}>Please Enter Your Information</Text>
          <MaterialIcons
          name='close'
          size={35}
          color='firebrick'
          styles={{...styles.modalToggle, ...styles.modalClose}}
          onPress={() => setModalOpen(false)}
          />
        </View>
      <ReviewForm/>
      </View>
        </Modal>
      <MaterialIcons
        name='add'
        size={54}
        color='firebrick'
        styles={StyleSheet.modalToggle}
        onPress={() => setModalOpen(true)}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
    textAlign: 'center'
  },
  modalText: {
    fontSize: 22,
    color: 'darkgray',
    alignSelf: 'center'
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'darkred',
    padding: 10,
    borderRadius:10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 10,
    marginBottom: 0
  },
  modalHeader: {
    alignItems: 'center'
  }

});
export default Home
