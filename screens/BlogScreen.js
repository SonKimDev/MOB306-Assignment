import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const BlogScreen = ({navigation}) => {
    const route = useRoute();
    const item = route.params.item;
    console.log(item);

    const handleBack = () => {
        navigation.pop();
    }

  return (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={{uri: item.imageLink}}
        />
        <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.description}</Text>
                <Text style={styles.text}>{item.content}</Text>
            </ScrollView>
            <TouchableOpacity style={styles.handleBackContainer} onPress={handleBack}>
                <Text style={styles.handleBackContent}>
                    Trở về
                </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default BlogScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#eef6f8',
    },
    image:{
        flex: 4,
        backgroundColor: 'black'
    },
    content:{
        flex: 10,
        padding: 8,
        backgroundColor: '#eef6f8',
    },
    title:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 30,
    },
    handleBackContainer:{
        backgroundColor: '#173d56',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 8,
        borderRadius: 20,
        elevation: 8,
    },
    handleBackContent:{
        color: 'white',
        fontSize: 20,
    },
    text:{
        color: 'black',
        fontWeight: '500',
        fontSize: 16,
    }
})