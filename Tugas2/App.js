import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import No2 from './componens/no2';
import No3 from './componens/no3';
import No4rcc from './componens/no4rcc';
import No4rfc from './componens/no4rfc';

export default function App() {
  return (
    <View style={{flex:1}}>
      {/* <No2/> */}
      {/* <No3/> */}
      <No4rcc style={{borderWidth:1}}/>
      <No4rfc/>
      <StatusBar style='light'/>
    </View>
  );
}
