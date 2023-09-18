import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Button} from 'react-native'
import React, {useState} from 'react'

const HomeScreen = () => {
  const [isShow, setIsShow] = useState(false)
  const handleModel = () => {
    setIsShow(!isShow);
  }
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.logoContainer} onPress={handleModel}>
        <Text style={styles.logoContent}>LINEUP</Text>
      </TouchableOpacity>
      <Modal
        visible={isShow}
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Cảm ơn bạn tin tưởng sử dụng ứng dụng của chúng tôi</Text>
            <Button title='press me' onPress={()=>setIsShow(!isShow)}/>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,

  },
  logoContainer:{
    paddingTop: 8,
    paddingLeft: 10,
  },
  logoContent:{
    fontWeight: 'bold',
    color: 'red',
    fontSize: 30,
  },
  modalContainer:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent:{
    width: 300,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
  },
})