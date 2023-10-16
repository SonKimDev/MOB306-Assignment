import { StyleSheet, Text, Modal, Button, View, TextInput, TouchableOpacity, Image, Alert} from 'react-native'
import React, { useState } from 'react'
import * as Icon from "react-native-feather";
import {launchImageLibrary} from 'react-native-image-picker';
import { ref, set } from 'firebase/database';
import { db } from '../config/firebase';

const ModalAddBlog = ({visible, onCancel}) => {
  const [selectedCategory, setSelectedCategory] = useState('hot');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [imageLink, setImageLink] = useState('');

  const refreshInput = () => {
    setTitle('');
    setDescription('');
    setContent('');
    setImageLink('');
  }

  const handleAddBlog = () => {
    if(title.length<=0){
      alert('Please enter title');
      return;
    }else if(description.length<=0){
      alert('Please enter description');
      return;
    }else if(content.length<=0){
      alert('Please enter content');
      return;
    }else if(imageLink.length<=0){
      alert('Please enter image link1');
      return;
    }else{
      const id = `${Date.now()}-${Math.floor(Math.random()*1000)}`;
      const newBlogData = {
        id: id,
        title: title,
        description: description,
        content: content,
        imageLink: imageLink,
        category: selectedCategory,
        like: [],
        comments: [],
      }
      const blogRef = ref(db, 'blogs/'+id);
      set(blogRef,newBlogData)
      .then(()=>{
        alert('Thêm thành công');
        onCancel();
        refreshInput();
      })
      .catch((error)=>{
        console.log('lỗi: ', error);
      })
      return;
    }
  }

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>New Blog</Text>
            <Text> Image:</Text>
            <View style={styles.editImageContainer}>
              {
                imageLink.length>0
                ?(
                  <TouchableOpacity onPress={()=>{}}>
                    <Image source={{uri:imageLink}} style={styles.image}/>
                  </TouchableOpacity>
                )
                : (
                  <TouchableOpacity onPress={()=>{}}>
                    <Image source={require('../assets/images/noimage.jpg')} style={styles.image}/>
                  </TouchableOpacity>
                )
              }
            </View>
            <TextInput
              placeholder="Enter title"
              value={title}
              onChangeText={text => setTitle(text)}
              style={styles.input}
            />
            <TextInput 
            placeholder='Enter description'
            value={description}
            onChangeText={text => setDescription(text)}
            style={styles.input}/>
            <TextInput 
            placeholder='Image link'
            value={imageLink}
            onChangeText={text => setImageLink(text)}
            style={styles.input}/>
            <TextInput
            placeholder='Enter content'
            value={content}
            onChangeText={text => setContent(text)}
            style={[styles.input,{maxHeight: 300}]}/>
            <Text> Category:</Text>
            <View style={styles.listCategory}>
              <TouchableOpacity onPress={() => setSelectedCategory('hot')}>
                <Text style={[styles.category,{ color: selectedCategory === 'hot' ? 'blue' : 'black' }]}>Hot</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedCategory('sports')}>
                <Text style={[styles.category,{ color: selectedCategory === 'sports' ? 'blue' : 'black' }]}>Sports</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedCategory('healthy')}>
                <Text style={[styles.category,{ color: selectedCategory === 'healthy' ? 'blue' : 'black' }]}>Healthy</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedCategory('love')}>
                <Text style={[styles.category,{ color: selectedCategory === 'love' ? 'blue' : 'black' }]}>Love</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setSelectedCategory('young')}>
                <Text style={[styles.category,{ color: selectedCategory === 'young' ? 'blue' : 'black' }]}>Young</Text>
              </TouchableOpacity>
            </View>
            <Button title="Add" onPress={handleAddBlog}/>
            <Button title="Close" onPress={()=>{onCancel(),refreshInput();}} />
          </View>
        </View>
      </Modal>
  )
}

export default ModalAddBlog

const styles = StyleSheet.create({
  modalContainer:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent:{
    backgroundColor: 'white',
    padding: 16,
    width: 360,
    maxWidth: 360,
    elevation: 8,
    borderRadius: 10,
  },
  title:{
    fontSize: 50,
    color: 'black',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  listCategory:{
    flexDirection: 'row',
  },
  category:{
    margin: 8,
  },
  editImageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginVertical: 20,
  },
  image:{
    width: 300,
    height: 200,
  },
})