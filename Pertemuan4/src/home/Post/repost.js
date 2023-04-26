import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import Posting from './posting';

const Story = ({Users}) => {
    return (
        <View>
            <View style={{alignItems:'center'}}>
                <ScrollView horizontal={true}>
                    {Users.map((v,index)=>(
                        <Posting key={index} items={v}/>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Story;
