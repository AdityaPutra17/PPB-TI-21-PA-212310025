import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

class Car extends Component {
    constructor(props){
        super(props);
        this.state={
            merek:"Toyota",
            types:{type:"matik", model:"Calya ADS"}
        }
    }    

    Come2go(value){
        return(
            <View>
                <Text>Let's go running away from duty</Text>
                <Text>With the only {value} IDR</Text>
            </View>
        )
            
        
    }

    render() {
        return (   
        <SafeAreaView>
            <View>
                <Text>Hi i'm Car</Text>
                <Text>Merek : {this.state.merek}</Text>
            </View>
            <View>
                <Text>Type : {this.state.types.type}</Text>
                <Text>Model : {this.state.types.model}</Text>
            </View>
                {this.Come2go(200000)}
        </SafeAreaView>
        );
    }
}

export default Car;
