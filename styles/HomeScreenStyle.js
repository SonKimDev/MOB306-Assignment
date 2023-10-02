import {StyleSheet} from 'react-native'

const HomeScreenStyle = StyleSheet.create({
    container:{
      backgroundColor: '#eef6f8',
       flex: 1,
    },
    logoContainer:{
      paddingTop: 8,
      paddingLeft: 10,
      marginBottom: 8,
    },
    logoContent:{
      fontWeight: 'bold',
      color: '#173d56',
      fontSize: 30,
    },
    addBlogContainer:{
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      bottom: 10,
      right: 10,
      backgroundColor: '#173d56',
      borderRadius: 100,
    },
    addBlogContent:{
      color: 'white',
      fontSize: 50,
    },
  })

export default HomeScreenStyle;