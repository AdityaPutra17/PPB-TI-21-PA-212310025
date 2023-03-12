import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';


export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={require('./assets/Profile.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Aditya Putra</Text>
        <Text style={styles.title}>NPM : 212310025</Text>
      </View>
      <View style={styles.socialLinks}>
        <TouchableOpacity style={styles.socialLink} >
          <FontAwesome name="instagram" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLink}>
          <FontAwesome name="linkedin" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLink}>
          <FontAwesome name="twitter" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialLink}>
          <FontAwesome name="whatsapp" size={28} color="black"></FontAwesome>
        </TouchableOpacity>
      </View>
      <View style={styles.number}>
        <Text style={[styles.nmbr,{fontSize: 24, fontWeight:'bold', marginHorizontal:35}]}>12k</Text>
        <Text style={[styles.nmbr,{fontSize: 24, fontWeight:'bold', marginHorizontal:15}]}>12</Text>
        <Text style={[styles.nmbr,{fontSize: 24, fontWeight:'bold'}]}>23k</Text>
      </View>
      <View style={[styles.another]}>
        <Text style={styles.text}>Followers</Text>
        <Text style={styles.text}>Posting</Text>
        <Text style={styles.text}>Likes</Text>
      </View>
      <View style={styles.frameimg}>
        <View style={styles.image}>
          <Image source={require('./assets/resizedimg/tas.png')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
          <Image source={require('./assets/ancalaBG_Ijo.png')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
          <Image source={require('./assets/resizedimg/tas2.png')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
        </View>
        <View style={styles.image}>
          <Image source={require('./assets/ancalaBG_Ijo.png')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
          <Image source={require('./assets/resizedimg/tenda.png')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
          <Image source={require('./assets/ancalaBG_Ijo.png')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
        </View>
        <View style={styles.image}>
          <Image source={require('./assets/resizedimg/totebag.png')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
          <Image source={require('./assets/ancalaBG_Ijo.png')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
          <Image source={require('./assets/resizedimg/totbag.jpg')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
        </View>
        <View style={styles.image}>
          <Image source={require('./assets/ancalaBG_Ijo.png')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
          <Image source={require('./assets/resizedimg/pack.png')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
          <Image source={require('./assets/ancalaBG_Ijo.png')} style={[styles.post, {width:100, height:100, resizeMode:'contain'}]}/>
        </View>
      </View>
    <StatusBar style='dark' backgroundColor='white'/>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
    marginBottom: 20
  },
  profile:{
    justifyContent:"flex-start",
    alignItems:'center'
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    color:'#333333',
    fontSize: 24,
    marginTop: 5,
    fontWeight:'bold'
  },
  title: {
    color:'#999999',
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialLink: {
    marginHorizontal: 20,
  },
  number: {
    flexDirection: 'row',
    marginTop:20,
    justifyContent:'center'
  },
  another: {
    flexDirection: 'row',
    justifyContent:'center'
  },
  text: {
    marginHorizontal: 15,
    marginBottom:10
  },
  nmbr: {
    marginHorizontal: 25,
    justifyContent:'center'
  },
  image: {
    flexDirection:'row',
  },
  frameimg:{
    marginBottom: 30
  },
  post: {
    marginHorizontal: 1,
    marginTop: 2,
    borderRadius:3
  }
});





