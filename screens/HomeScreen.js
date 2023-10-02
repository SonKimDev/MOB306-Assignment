import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal, Button, FlatList, Image} from 'react-native'
import React, {useEffect, useState} from 'react'
import SplashScreen from 'react-native-splash-screen'
import * as Icon from "react-native-feather";
import styles from '../styles/HomeScreenStyle';
import ModalAddBlog from '../components/ModalAddBlog';

const HomeScreen = () => {
  const [focus, setFocus] = useState(null);
  const [isShowModalAddBlog, setIsShowModalAddBlog] = useState(false);
  useEffect(()=>{
    const timer = setTimeout(()=>{
      SplashScreen.hide();
    }, 3000);

    return () => clearTimeout(timer);
  },[])

  const data = [
    {
      id: 1,
      name: 'Hot',
    },
    {
      id: 2,
      name: 'Sports',
    },
    {
      id: 3,
      name: 'Healthy',
    },
    {
      id: 4,
      name: 'Love',
    },
    {
      id: 5,
      name: 'Young',
    },
  ]

  const news = [
    {
      title: 'Hot news 1',
      description: 'Quynh Non player got 5 headshots to help PTSX team win Valorant Champion 2023!',
      image: 'https://liquipedia.net/commons/images/thumb/8/8a/VCT_Champions_2023_allmode.png/600px-VCT_Champions_2023_allmode.png'
    },
    {
      title: 'Hot news 2',
      description: 'Just Rick Roll',
      image: 'https://assets.telegraphindia.com/telegraph/2023/Jan/1672986231_rick-rolled.jpg'
    }
  ];

  const renderItem = ({item,index}) => {
    return(
      <TouchableOpacity style={focus != index 
      ? {width: 80, height: 40, backgroundColor: 'white', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 20, elevation: 8, borderWidth: 3, borderColor: '#173d56', maxHeight: 40,} 
      : {width: 80, height: 40, backgroundColor: '#173d56', marginHorizontal: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 20, elevation: 8, maxHeight: 40,}} 
      onPress={()=>setFocus(index)}>
        <Text style={focus != index ? {fontWeight: 'bold', color: '#173d56',} : {fontWeight: 'bold', color: 'white'}}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  const renderNews = ({item}) => {
    return(
      <TouchableOpacity style={{borderWidth: 1, borderRadius: 10, padding: 12, backgroundColor: 'white', borderColor: '#173d56', elevation: 8, marginBottom: 16, flexDirection: 'row', flex: 1, maxHeight: 100}}>
        <View style={{width: '20%',borderRadius: 100, justifyContent: 'center', alignItems: 'center', marginRight: 8,}}>
          <Image
            source={{uri: item.image}}
            style={{width: '100%', height: '100%' ,borderRadius: 100,}}
          />
        </View>
        <View style={{width: '80%'}}>
          <Text style={{fontWeight: '700', color: 'black', fontSize: 20,}}>
            {item.title}
          </Text>
          <Text>
            {item.description}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Text style={styles.logoContent}>LINEUP</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{maxHeight: 40,}}
      />
      <FlatList
        data={news}
        renderItem={renderNews}
        style={{padding: 16,}}
      />
      <TouchableOpacity style={styles.addBlogContainer} onPress={()=>setIsShowModalAddBlog(true)}>
        <Text style={styles.addBlogContent}>
          +
        </Text>
      </TouchableOpacity>
      <ModalAddBlog
          visible={isShowModalAddBlog}
          onCancel={()=>setIsShowModalAddBlog(false)}
      />
    </SafeAreaView>
  )
}

export default HomeScreen