import { Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ref, remove, update } from 'firebase/database';
import { db } from '../config/firebase';

const ModalItemBlog = ({visible, onCancel, item}) => {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState('');
    const [imageLink, setImageLink] = useState('')

    useEffect(() => {
        if(item){
            setTitle(item.title);
            setCategory(item.category);
            setContent(item.content);
            setDescription(item.description);
            setId(item.id);
            setImageLink(item.imageLink);
        }
    }, [visible==true])
    

    const handleDelete = () => {
        const blogRef = ref(db, 'blogs/'+id);
        remove(blogRef)
        .then(()=>{
            console.log('Xóa thành công');
        })
        .catch((error)=>{
            console.log('Xóa thất bại');
        })
        onCancel();
    }

    const handleUpdate = () => {
        const blogRef = ref(db, 'blogs/'+id);
        const updateBlog = {
            title: title,
            category: category,
            content: content,
            description: description,
            imageLink: imageLink,
        }
        update(blogRef, updateBlog)
        .then(()=>{
            onCancel();
            alert('Sửa thành công');
        })
        .catch((error)=>{
            alert('Sửa thất bại');
            console.log('error: ', error);
        })
    }

  return (
    <Modal
        visible={visible}
        transparent={true}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.title}>Thông tin bài viết</Text>
                <Text>title:</Text>
                <TextInput value={title} onChangeText={text=>setTitle(text)} style={styles.input}/>
                <Text>description:</Text>
                <TextInput value={description} onChangeText={text=>setDescription(text)} style={styles.input}/>
                <Text>content:</Text>
                <TextInput value={content} onChangeText={text=>setContent(text)} style={styles.input}/>
                <Text>image link:</Text>
                <TextInput value={imageLink} onChangeText={text=>setImageLink(text)} style={styles.input}/>
                <View style={styles.listCategory}>
                <TouchableOpacity onPress={() => setCategory('hot')}>
                    <Text style={[styles.category,{ color: category === 'hot' ? 'blue' : 'black' }]}>Hot</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCategory('sports')}>
                    <Text style={[styles.category,{ color: category === 'sports' ? 'blue' : 'black' }]}>Sports</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCategory('healthy')}>
                    <Text style={[styles.category,{ color: category === 'healthy' ? 'blue' : 'black' }]}>Healthy</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCategory('love')}>
                    <Text style={[styles.category,{ color: category === 'love' ? 'blue' : 'black' }]}>Love</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCategory('young')}>
                    <Text style={[styles.category,{ color: category === 'young' ? 'blue' : 'black' }]}>Young</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.bagButton}>
                    <TouchableOpacity onPress={onCancel} style={styles.buttonCancelContainer}>
                        <Text style={styles.buttonCancelContent}>
                            Hủy
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonUpdateContainer} onPress={handleUpdate}>
                        <Text style={styles.buttonUpdateContent}>
                            Sửa
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonDeleteContainer} onPress={handleDelete}>
                        <Text style={styles.buttonDeleteContent}>
                            Xóa
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
  )
}

export default ModalItemBlog

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent:{
        backgroundColor: 'white',
        width: 350,
        maxWidth: 350,
        padding: 8,
    },
    bagButton:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonCancelContainer:{
        width: 80,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 20,
        elevation: 8,
    },
    buttonCancelContent:{
        color: 'white',
        fontSize: 20,
    },
    buttonUpdateContainer:{
        width: 80,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        borderRadius: 20,
        elevation: 8,
    },
    buttonUpdateContent:{
        color: 'white',
        fontSize: 20,
    },
    buttonDeleteContainer:{
        width: 80,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 20,
        elevation: 8,
    },
    buttonDeleteContent:{
        color: 'white',
        fontSize: 20,
    },
    input:{
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        padding: 8,
        marginBottom: 8,
    },
    title:{
        textAlign: 'center',
        color: 'black',
        fontWeight: '700',
        fontSize: 30,
    },
    listCategory:{
        flexDirection: 'row',
    },
    category:{
        margin: 8,
    },
})