import React, { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
      const unsub = onAuthStateChanged(auth, async user => {
        if(user){
          setUser(user);
        }else{
          setUser(null);
        }
      });
      return unsub;
    }, [])
    
  return { user }
}