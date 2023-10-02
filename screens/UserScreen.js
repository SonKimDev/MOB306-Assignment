import {Text, View, TouchableOpacity, Alert} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native-svg'
import styles from '../styles/UserScreenStyle'
import ModalAbout from '../components/ModalAbout'

const UserScreen = ({navigation}) => {
  const [about, setAbout] = useState(false)
  const handelAbout = () => {
    setAbout(!about);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfo}>
        <TouchableOpacity style={styles.userImageContainer} onPress={() => navigation.navigate('SignIn')}>
          <Image style={styles.userImageContent}/>
        </TouchableOpacity>
        <View style={styles.userContainer}> 
          <Text style={styles.userName}>SonKimDev</Text>
          <Text style={styles.userEmail}>kimson2507.contact@gmail.com</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.aboutContainer} onPress={handelAbout}>
        <Text style={styles.aboutContent}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutContainer} onPress={()=>alert('Sign out successfully')}>
        <Text style={styles.aboutContent}>Sign out</Text>
      </TouchableOpacity>
      <ModalAbout
        visible={about}
        onCancel={handelAbout}
      />
    </SafeAreaView>
  )
}

export default UserScreen