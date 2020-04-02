import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
const Home = () => {

  const [ modalOpen, setModalOpen] = useState(false)

  return(
    <View>
      <Modal
      visible={modalOpen}
      animationType='slide'
      >
      <View style={styles.modalContent}>
        <Text style={styles.modalText}>Modal Man! modayl Man Modal man.</Text>
        <MaterialIcons
          name='close'
          size={54}
          color='gray'
          styles={{...styles.modalToggle, ...styles.modalClose}}
          onPress={() => setModalOpen(false)}
        />
        </View>
      </Modal>
      <MaterialIcons
        name='add'
        size={54}
        color='gray'
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
    marginTop: 50
  },
  modalText: {
    fontSize: 30,
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

});
export default Home
