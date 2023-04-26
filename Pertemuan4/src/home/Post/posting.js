import React from 'react';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {View, StyleSheet, Image, Text} from 'react-native';

const Posting = ({items}) => {
    // console.log(Users);
    return (
        <View style={styles.container}>
                <View style={{ marginBottom: 20, marginTop:5 }}>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 20, alignItems: 'center' }}>
                        {items.gender == 'M' ?
                            <Image source={require('../../../assets/icons/man.png')} style={styles.avatar} /> :
                            <Image source={require('../../../assets/icons/female.png')} style={styles.avatar} />}
                        <Text style={{ fontWeight: 'bold', color:'white' }}>{items.username}</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Image source={require('../../../assets/icons/post1.jpg')} style={{ width: 360, height: 380 }} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <FontAwesome5 name={"heart"} size={25} color='white' style={{marginHorizontal:10}}/>
                            <FontAwesome5 name={"comment"} size={25} color='white' style={{marginHorizontal:10}}/>
                            <FontAwesome5 name={"paper-plane"} size={25} color='white'style={{marginHorizontal:10}}/>
                        </View>
                        <View style={{flexDirection:'row-reverse'}}>
                            <FontAwesome5 name={"bookmark"} size={25} color='white' style={{marginRight:10}}/>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 15 }}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'grey'}}>Disukai oleh</Text>
                            <Text style={{color:'white', marginLeft:8}}>{items.username} dan lainnya ....</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold', color:'grey' }}>68.982 Likes</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginRight: 10, fontWeight: 'bold', color:'white' }}>{items.username}</Text>
                            <Text style={{color:'white'}}>Tree on water</Text>
                        </View>
                        <Text style={{  color:'grey' }}>Lihat Semua 1.521 Komentar</Text>
                    </View>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor:'black'
    },
    avatar: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: 'purple',
        borderRadius: 100,
        marginRight: 10
    }
})

export default Posting;
