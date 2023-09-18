import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';
import React from 'react';

const Tab = createBottomTabNavigator();
const Home = 'Home';
const User = 'User';

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName={Home}
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen name={Home} component={HomeScreen} />
      <Tab.Screen name={User} component={UserScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;