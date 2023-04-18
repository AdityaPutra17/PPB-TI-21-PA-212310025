import React from 'react';
import {View,Image, StyleSheet} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Top = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/icons/ig.png')} style={styles.img}/>
            <View style={{flexDirection: 'row', padding:10, marginRight:10}}>
                <View>
                    <FontAwesome5 name={"heart"} size={25} color='white' style={{marginHorizontal:15}}/>
                </View>
                <View>
                    <FontAwesome5 name={"paper-plane"} size={25} color='white'/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    img:{
       width:110,
       height:30,
       marginHorizontal:20,
       marginVertical:10
    }
})

export default Top;
