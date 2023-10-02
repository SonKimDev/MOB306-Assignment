import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import React from 'react';
import * as Icon from "react-native-feather";


const Tab = createBottomTabNavigator();
const Home = 'Home';
const User = 'User';

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName={Home}
    screenOptions={({route})=>({
        tabBarIcon: ({focused, size, color}) => {
          let rn = route.name;
          if(rn === Home){
            return focused ? <Icon.Home width={size} height={size} color={'white'}/> : <Icon.Home width={size} height={size} color={color}/>
          } else if(rn === User){
            return focused ? <Icon.User width={size} height={size} color={'white'}/> : <Icon.User width={size} height={size} color={color}/>
          }
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: '10%',
          backgroundColor: '#173d56',
        }
      }
    )}
    >
      <Tab.Screen name={Home} component={HomeScreen} />
      <Tab.Screen name={User} component={UserScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;