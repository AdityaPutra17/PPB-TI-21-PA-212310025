import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import SearchBar from './widgets/SearchBar';
import ExpscrollView from './ExpscrollView';
import { Users } from '../const-data/Users';

export class MyFriends extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
              <StatusBar hidden={false}/>
                <View style={styles.header}>
                    <SearchBar/>
                </View>
                <View style={styles.body}>
                  <ExpscrollView Users={Users}/>
                </View>
            </SafeAreaView>
        );
    }
}

export default MyFriends;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black"
  },
  header:{
    flex:1,
    justifyContent:'center',
    paddingHorizontal:10,
    backgroundColor:'black'
  },
  body:{
    flex:10,
    backgroundColor:'black'
  }
})