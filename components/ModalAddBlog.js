import { StyleSheet, Text, Modal, Button, View, TextInput} from 'react-native'
import React from 'react'

const ModalAddBlog = ({visible, onCancel}) => {
  return (
    <Modal
        visible={visible}
        transferent={false}
        animationType='slide'
    >
      <View style={styles.container}>
        <Text style={styles.title}>Add Blog</Text>
        <TextInput placeholder='Enter your new blog title' style={styles.input}/>
        <TextInput placeholder='Enter your new blog description' style={styles.input}/>
        <TextInput placeholder='Enter your new blog content' style={[styles.input,{maxHeight: 300}]}
        editable
        multiline
        numberOfLines={4}/>
        <Button title='Close' onPress={onCancel}/>
      </View>
    </Modal>
  )
}

export default ModalAddBlog

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 20,
  },
  title:{
    fontSize: 50,
    color: 'black',
    marginBottom: 20,
    alignSelf: 'center',

  },
  input:{
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#173d56',
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
})