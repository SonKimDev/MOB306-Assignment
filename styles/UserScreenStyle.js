import {StyleSheet} from 'react-native'

const UserScreenStyle = StyleSheet.create({
    container:{
      flex: 1,
      padding: 8,
      backgroundColor: '#eef6f8',
    },
    userInfo:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    userImageContainer:{
      width: 80,
      height: 80,
      borderRadius: 100,
      backgroundColor: '#173d56',
      marginRight: 16,
    },
    userImageContent:{
      borderRadius: 20,
    },
    userContainer:{
    },
    userName:{
      color: 'black',
      fontSize: 30,
    },
    userEmail:{
    },
    aboutContainer:{
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      borderWidth: 1,
      padding: 10,
      borderRadius: 20,
      backgroundColor: '#173d56',
      elevation: 8,
    },
    aboutContent:{
      color: 'white',
      fontSize: 20,
    },
  })

  export default UserScreenStyle;