import {Text, View, TouchableOpacity, Image} from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from '../styles/UserScreenStyle'
import ModalAbout from '../components/ModalAbout'
import { auth, db } from '../config/firebase'
import useAuth from '../hooks/useAuth'
import { signOut } from 'firebase/auth'
import { get, ref } from 'firebase/database'

const UserScreen = ({navigation}) => {
  const [about, setAbout] = useState(false);

  const handelAbout = () => {
    setAbout(!about);
  }

  const handelSignOut = async() => {
    await signOut(auth);
  }

  const handelChangeInfo = () => {
    navigation.navigate('ChangeInfomation');
  }

  const user = useAuth();
  const [type, setType] = useState(null);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(()=>{
    if(user.user!=null){
      const uid = user.user.uid;
      const userRef = ref(db, `users/${uid}`);
      get(userRef)
      .then((snapshot)=>{
        if(snapshot.exists){
          const userData = snapshot.val();
          setType(userData.type);
          setName(userData.userName);
          setImage(userData.image);
          console.log(type);
          console.log(userData);
          console.log(image);
        }else{
          console.log('Không tìm thấy người dùng với UID này.');
        }
      })
      .catch((error)=>{
        console.log('error: ',error);
      })
    }else{
      setType(null);
    }
  },[user])

  if(user.user){
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.userInfo}>
            <TouchableOpacity style={styles.userImageContainer}>
              {
                image.length <= 0
                ? <View style={styles.userImageContainer}></View>
                : <Image style={styles.userImageContent} source={{uri: image}}/>
              }
            </TouchableOpacity>
            <View style={styles.userContainer}> 
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userEmail}>{user.user.email}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.aboutContainer} onPress={handelAbout}>
            <Text style={styles.aboutContent}>Về</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.aboutContainer} onPress={handelChangeInfo}>
            <Text style={styles.aboutContent}>Đổi thông tin</Text>
          </TouchableOpacity>
          {
            type == 1
            ? <TouchableOpacity style={styles.aboutContainer} onPress={()=>navigation.navigate('Management')}>
              <Text style={styles.aboutContent}>Quản lí bài viết</Text>
            </TouchableOpacity>
            : null
          }
          <TouchableOpacity style={styles.aboutContainer} onPress={handelSignOut}>
            <Text style={styles.aboutContent}>Đăng xuất</Text>
          </TouchableOpacity>
          <ModalAbout
            visible={about}
            onCancel={handelAbout}
          />
        </View>
      </SafeAreaView>
    )
  }else{
    return(
      <SafeAreaView style={[styles.container,{justifyContent: 'center',}]}>
        <Text style={styles.userName}>
          Bạn chưa đăng nhập
        </Text>
        <TouchableOpacity style={styles.aboutContainer} onPress={()=>navigation.navigate('SignIn')}>
          <Text style={styles.aboutContent}>Sign In</Text>
        </TouchableOpacity><TouchableOpacity style={styles.aboutContainer} onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.aboutContent}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}

export default UserScreen