import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { ref, set } from 'firebase/database';

const SignUpScreen = () => {
  
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');


  const handleAddUser = async() => {
    try {
        if(email.length<=0){
            alert('please enter email');
            return;
        }else if(password.length<=0){
            alert('please enter password');
            return;
        }else if(checkPassword.length<=0){
            alert('please enter check password');
            return;
        }else if(checkPassword!==password){
            alert('password and check password are not the same');
            return;
        }else{
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                const user = userCredential.user;
                const userData = {
                    type: 2,
                    userName: 'Người dùng',
                    image: null,
                };
                const userRef = ref(db, 'users/'+user.uid);
                set(userRef,userData);
            })
        }
    } catch (error) {
        console.log('error: ', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Sign Up</Text>
      </View>  
      <View style={styles.bottom}>
        <TextInput
            placeholder='Email'
            onChangeText={text=>setEmail(text)}
            placeholderTextColor={'#173d56'}
            style={styles.input}
        />
        <TextInput
            placeholder='Password'
            onChangeText={text=>setPassword(text)}
            placeholderTextColor={'#173d56'}
            secureTextEntry
            style={styles.input}
        />
        <TextInput
            placeholder='Confirm password'
            onChangeText={text=>setCheckPassword(text)}
            placeholderTextColor={'#173d56'}
            secureTextEntry
            style={styles.input}
        />
        <TouchableOpacity style={styles.buttonSignUpContainer} onPress={handleAddUser}>
            <Text style={styles.buttonSignUpContent}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#173d56',
    },
    top:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 8,
    },
    title:{
        color: 'white',
        fontSize: 50,
        fontWeight: '700',
    },
    bottom:{
        flex: 4,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingTop: 30,
        elevation: 8,
    },
    input:{
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: '#173d56',
        borderRadius: 20,
        paddingHorizontal: 16,
        marginTop: 20,
    },
    buttonSignUpContainer:{
        backgroundColor: '#173d56',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '8%',
        marginTop: 30,
        borderRadius: 20,
        elevation: 8,
    },
    buttonSignUpContent:{
        color: 'white',
        fontSize: 18,
    },
})