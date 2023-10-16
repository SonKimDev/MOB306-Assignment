import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useAuth from '../hooks/useAuth'
import { get, ref, update } from 'firebase/database'
import { db, auth} from '../config/firebase'
import { signOut, updatePassword } from 'firebase/auth'

const ChangeInfomationScreen = ({navigation}) => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [imageLink, setImageLink] = useState('');

  const handleBack = () => {
    navigation.pop();
  }

  const user = useAuth();

  const handleChangeInfo = async() => {
    if(user.user!=null){
      const uid = user.user.uid;
      if(name.length<=0){
        alert('Vui lòng nhập tên');
        return;
      }else if(password.length<=0){
        alert('Vui lòng nhập mật khẩu');
        return;
      }else if(rePassword.length<=0){
        alert('Vui lòng nhập lại mật khẩu');
        return;
      }else if(password!=rePassword){
        alert('Mật khẩu và nhập lại mật khẩu không khớp');
        return;
      }else if(imageLink.length<=0){
        alert('Vui lòng nhập link ảnh');
        return;
      }else{
        updatePassword(auth.currentUser, password)
        .then(()=>{
        const userRef = ref(db, 'users/'+uid);
        update(userRef, {
            userName: name,
            image: imageLink,
          }
        )
        })
        await signOut(auth);
      }
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Đổi thông tin tài khoản
      </Text>
      <Text style={styles.label}>Tên:</Text>
      <TextInput style={styles.input} placeholder='Vui lòng nhập...' placeholderTextColor={'#173d56'} value={name} onChangeText={text=>setName(text)}/>
      <Text style={styles.label}>Mật khẩu:</Text>
      <TextInput style={styles.input} placeholder='Vui lòng nhập...' placeholderTextColor={'#173d56'} secureTextEntry value={password} onChangeText={text=>setPassword(text)}/>
      <Text style={styles.label}>Nhập lại mật khẩu:</Text>
      <TextInput style={styles.input} placeholder='Vui lòng nhập...' placeholderTextColor={'#173d56'} secureTextEntry value={rePassword} onChangeText={text=>setRePassword(text)}/>
      <Text style={styles.label}>Nhập link ảnh:</Text>
      <TextInput style={styles.input} placeholder='Vui lòng nhập...' placeholderTextColor={'#173d56'} value={imageLink} onChangeText={text=>setImageLink(text)}/>
      <TouchableOpacity style={styles.changeButtonContainer} onPress={handleChangeInfo}>
      <Text style={styles.changeButtonContent}>Xác nhận</Text>
      </TouchableOpacity><TouchableOpacity style={styles.returnButtonContainer} onPress={handleBack}>
        <Text style={styles.returnButtonContent}>Trở về</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ChangeInfomationScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 16,
    backgroundColor: '#eef6f8',
  },
  title:{
    textAlign: 'center',
    color: '#173d56',
    fontSize: 33,
    fontWeight: '700',
    marginBottom: 10,
  },
  label:{
    color: '#173d56',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 8,
  },
  input:{
    borderWidth: 1,
    borderColor: '#173d56',
    paddingHorizontal: 10,
    marginBottom: 8,
  },
  changeButtonContainer:{
    backgroundColor: '#173d56',
    padding: 16,
    elevation: 8,
    borderRadius: 10,
    marginTop: 8,
  },
  changeButtonContent:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  returnButtonContainer:{
    backgroundColor: 'white',
    padding: 16,
    elevation: 8,
    borderRadius: 10,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#173d56',
  },
  returnButtonContent:{
    color: '#173d56',
    fontSize: 20,
    textAlign: 'center',
  },
})