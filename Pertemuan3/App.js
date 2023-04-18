import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import MyFriends from './src/components/Friends/MyFriends';
import ExpscrollView from './src/components/Friends/ExpscrollView';
import UserItems from './src/components/Friends/UserItems';
import { Users } from './src/components/const-data/Users';
import Main from './src/home/main';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MyFriends/>*/ }
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
