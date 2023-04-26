import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Posting from './posting';

const Feed = ({Users}) => {
    return (
        <View>
        <View style={{alignItems:'center'}}>
            <ScrollView>
                {Users.map((v,index)=>(
                    <Posting key={index} items={v}/>
                ))}
            </ScrollView>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({})

export default Feed;
