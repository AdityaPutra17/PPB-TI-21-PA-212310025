import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TextContent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.judul}>History of Bicyle</Text>
                <Text>A bicle, also called a , 
                <Text style={{color:'red'}}>pedal cycle</Text>
                <Text style={{fontWeight:'bold'}}>bike,</Text>
                <Text style={{fontStyle:'italic'}}>push-bike, or cycle</Text>
                is a human-powered or motor-powered assisted, single-track vehicle having two wheels attached to a frame ,one behind the other.A bicycle rider is called a cyclist. or bicyclist
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        width:150,
        height:310,
    },
    judul:{
        alignItems:'center',
        backgroundColor:'brown',
        textDecorationLine:'underline',
        color:'white',
        fontSize: 20,
        padding:15
    }
})

export default TextContent;
