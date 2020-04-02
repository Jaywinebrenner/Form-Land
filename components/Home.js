import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
const Home = () => {

  const [ modalOpen, setModalOpen] = useState(false)

  return(
    <View>
      <Modal
      visible={modalOpen}
      style={styles.modalContent}
      animationType='slide'
      >
        <Text style={styles.modalText}>Modal Man! modayl Man Modal man.</Text>
        <MaterialIcons
          name='close'
          size={54}
          color='red'
          onPress={() => setModalOpen(false)}
        />
      </Modal>
      <MaterialIcons
        name='add'
        size={54}
        color='red'
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
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 30,
    color: 'darkgray',
    marginTop: 150
  },
  modalToggle: {
    fontSize: 30,
    color: 'darkgray',
    marginTop: 150
  }
});
export default Home
