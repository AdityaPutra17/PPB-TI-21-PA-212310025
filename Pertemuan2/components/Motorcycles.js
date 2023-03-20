import React from 'react';
import { View, Text } from 'react-native-web';


var name="Honda";
const Motorcycles = () => {
    return (
        <View>
            <Text>Hi i'm Motorcycles</Text>
            <Text>Merek : {name}</Text>
            <Text>Type : {types.type}</Text>
            <Text>Model : {types.model}</Text>
            <Text>Harga : {types.harga}</Text>
        </View>
    );
}

export default Motorcycles;

const types = {type:"metic", model:"Vario", harga:"15000"};