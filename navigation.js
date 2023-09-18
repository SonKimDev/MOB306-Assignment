import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './mytabs';

const Stack = createNativeStackNavigator();
const tab = 'MyTabs';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;