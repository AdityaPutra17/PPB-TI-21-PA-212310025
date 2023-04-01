import React, { Component } from 'react';
import {  View } from 'react-native';
import Avatra from './avatra';
import TextContent from './textContent';

class No2 extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextContent/>
                <Avatra/>
                
            </View>
        );
    }
}

export default No2;
