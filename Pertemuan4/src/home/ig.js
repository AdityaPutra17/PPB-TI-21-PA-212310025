import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Top from './top';
import Story from './Story/story';
import { Users } from '../components/const-data/Users';
import MyFriends from '../components/Friends/MyFriends';
import Posting from './Post/posting';
import Feed from './Post/feed';

const Ig = () => {
    return (
        <View style={styles.container}>
            <StatusBar hidden={false}/>
            <View style={styles.top}>
                <Top/>
            </View>
            <View style={styles.story}>
                <Story Users={Users} />
            </View>
            <View style={styles.post}>
                <Feed Users={Users}/>
            </View>
            {/* <MyFriends/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    top:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'black',
    },
    story:{
        flex:2,
        backgroundColor: 'black',
        justifyContent:'center',
        paddingLeft:5
    },
    post:{
        flex:10,
    }
})

export default Ig;
