import React from 'react';
import {View,Image,StyleSheet, Text} from 'react-native';

const StyleProfile = ({items}) => {
    return (
           <View style={styles.img}>
                {items.gender === "M" ? (
                    <Image source={require("../../../assets/icons/man.png")} style={{...styles.imgstry, backgroundColor: "white" }} />
                ) : (
                    <Image source={require("../../../assets/icons/female.png")} style={styles.imgstry} />
                )}

                {items.gender === "M" ? (
                    <Text style={{color: "white"}}>{items.username}</Text>
                ) : (
                    <Text style={{color: "white"}}>{items.username}</Text>
                )}
       </View>
            // </View>
    );
}

const styles = StyleSheet.create({
   
    img:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:100,
        marginHorizontal:10,
    },
    imgstry:{
        width: 65, 
        height: 65,
        borderWidth:3,
        borderRadius:100,
        borderColor:"purple"
    }
})

export default StyleProfile;
