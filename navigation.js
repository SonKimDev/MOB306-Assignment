import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './mytabs';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const tab = 'MyTabs';
const SignIn = 'SignIn';
const SignUp = 'SignUp';

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName={tab}
      screenOptions={{
        headerShown: false,
      }}
      >
        <Stack.Screen name={tab} component={MyTabs} />
        <Stack.Screen name={SignIn} component={SignInScreen} />
        <Stack.Screen name={SignUp} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;