import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './mytabs';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import useAuth from './hooks/useAuth';
import ManagementScreen from './screens/ManagementScreen';
import ChangeInfomationScreen from './screens/ChangeInfomationScreen';
import BlogScreen from './screens/BlogScreen';

const Stack = createNativeStackNavigator();
const tab = 'MyTabs';
const SignIn = 'SignIn';
const SignUp = 'SignUp';
const Management = 'Management';
const ChangeInfomation = 'ChangeInfomation';
const Blog = 'Blog';

function Navigation() {
  const {user} = useAuth();
  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName={tab}
        screenOptions={{
          headerShown: false,
        }}
        >
          <Stack.Screen name={tab} component={MyTabs} />
          <Stack.Screen name={Management} component={ManagementScreen} />
          <Stack.Screen name={ChangeInfomation} component={ChangeInfomationScreen} />
          <Stack.Screen name={Blog} component={BlogScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }else{
    return (
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName={tab}
        screenOptions={{
          headerShown: false,
        }}
        >
          <Stack.Screen name={tab} component={MyTabs} />
          <Stack.Screen name={Blog} component={BlogScreen} />
          <Stack.Screen name={SignIn} component={SignInScreen} />
          <Stack.Screen name={SignUp} component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Navigation;