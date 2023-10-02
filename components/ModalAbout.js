import { StyleSheet, Text, Modal, Button, View} from 'react-native'
import React from 'react'

const ModalAbout = ({visible, onCancel}) => {
  return (
    <Modal
        visible={visible}
        transferent={false}
        animationType='slide'
    >
      <View style={styles.container}>
        <Text style={styles.content}>Phải bạn không? Cùng sửa nhé</Text>
        <Button title='Đóng' onPress={onCancel}/>
      </View>
    </Modal>
  )
}

export default ModalAbout

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
  }
})