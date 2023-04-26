import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ig from './src/home/ig';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyFriends from './src/components/Friends/MyFriends';

const Tab = createBottomTabNavigator();

const Screen = () => {
    return (
            <Tab.Navigator>
                <Tab.Screen name='Home' component={Ig} options={{headerShown:false}}/>
                <Tab.Screen name="Search" component={MyFriends} options={{headerShown:false}}/>
            </Tab.Navigator>  
    );
}

const styles = StyleSheet.create({})

export default Screen;
