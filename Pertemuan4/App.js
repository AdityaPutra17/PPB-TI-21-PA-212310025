import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './SignIn';
import Screen from './screen';
import Ig from './src/home/ig';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyFriends from './src/components/Friends/MyFriends';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Login' component={SignIn} />
        <Stack.Screen name='Screen' component={Screen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});
