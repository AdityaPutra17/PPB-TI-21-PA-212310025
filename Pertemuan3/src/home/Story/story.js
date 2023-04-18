import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import StyleProfile from './style_profile';

const Story = ({Users}) => {
    return (
        <View>
            <View style={{alignItems:'center'}}>
                <ScrollView horizontal={true}>
                    {Users.map((v,index)=>(
                        <StyleProfile items={v} key={index} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

})

export default Story;
