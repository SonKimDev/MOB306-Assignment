import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import ModalAddBlog from '../components/ModalAddBlog';
import { get, onValue, ref } from 'firebase/database';
import { db } from '../config/firebase';
import styles from '../styles/ManagementStyles';
import ModalItemBlog from '../components/ModalItemBlog';


const ManagementScreen = ({navigation}) => {

  const [blogs, setBlogs] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isShowItemBlog, setIsShowItemBlog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const dataRef = ref(db, 'blogs');
    
    onValue(dataRef, (snapshot) =>{
      if(snapshot.exists){
        const data = snapshot.val();
        const dataMaps = Object.values(data);
        setBlogs(dataMaps);
      }
    })
    
  }, []); 
  
  
  
  const renderItem = ({item}) => {

    const handleShowItemBlog = () => {
      setSelectedItem(item);
      console.log(selectedItem);
      setIsShowItemBlog(!isShowItemBlog);
    }

    return (
      <TouchableOpacity style={styles.itemContainer} onPress={()=>handleShowItemBlog()}>
        <Image
          style={styles.itemImage}
          source={{uri: item.imageLink}}
        />
        <View style={styles.itemContent}>
          <Text style={styles.itemTitle}>{item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quản lí bài viết</Text>
      <TouchableOpacity
        style={styles.addBlogContainer}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addBlogContent}>Thêm bài viết</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.addBlogContainer}
        onPress={() => navigation.pop()}
      >
        <Text style={styles.addBlogContent}>Trở về</Text>
      </TouchableOpacity>
      <FlatList
        data={blogs}
        renderItem={renderItem}
      />
      <ModalAddBlog
        visible={modalVisible}
        onCancel={()=>setModalVisible(false)}
      />
      <ModalItemBlog
        visible={isShowItemBlog}
        onCancel={()=>setIsShowItemBlog(false)}
        item={selectedItem!=null ? selectedItem : {}}
      />
    </View>
  );
};

export default ManagementScreen;
