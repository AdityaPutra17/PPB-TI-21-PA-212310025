import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

const No3 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cont2}>
                <Image source={require('../assets/ibik.png')} style={{width:120, height:120}}/>
            </View>
            
            <Text style={{flex:1,color:'#fff'}}>Loading...</Text>
            
        </View>

    );
}

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor:'purple',
        alignItems:'center',
        justifyContent:'center'
    },
    cont2:{
        flex:9,
        justifyContent:'center'
    },
    Text:{
        
    }
})

export default No3;
