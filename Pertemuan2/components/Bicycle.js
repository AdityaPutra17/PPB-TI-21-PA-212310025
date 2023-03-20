import React from 'react';
import { View, Text } from 'react-native-web';

function Bicycle() {
    return (
        <View>
            <Text>Hi i'm Bicycle</Text>
            <TakeARide/>
            {Place2GO()}
        </View>
    );
}

export default Bicycle;

const TakeARide = () =>{
    return <Text>Let's go riding with me</Text>
};
function Place2GO(){
    return <Text>We'r going south west now, come on.</Text>;
}
