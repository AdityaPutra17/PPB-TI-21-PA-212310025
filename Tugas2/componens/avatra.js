import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Avatra = () => {
    return (
        <View style={styles.bg}>
            <View style={{backgroundColor:'#fff', borderWidth:1, width:65, }}>
                <Image source={require('../assets/avatar.png')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:'green', 
        padding:15, 
        width:90,
        alignItems:'center'
    }
})

export default Avatra;