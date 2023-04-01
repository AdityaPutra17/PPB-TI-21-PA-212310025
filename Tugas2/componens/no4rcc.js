import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class No4rcc extends Component {
    
    constructor(bio){
        super(bio);
        this.state={
            identity: {
                npm: 212310035,
                firstName: 'Aditya',
                middleName: '-',
                lastName: 'Putra'
            },
            educations: [
                { id: 1, sekolah: 'SDN Kedunghalang 2 Kota Bogor' },
                { id: 2, sekolah: 'SMP PGRI 6 Bogor' },
                { id: 3, sekolah: 'SMK Wikrama Bogor' }],
            mobile_phone: '083808282737',
            email: '212310025@student.ibik.ac.id',
            gender: 'M',
            tall_body: 165,
            weight_body: 52
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontWeight:"bold", fontSize:30}}>NO.4 RCC</Text>
                <Text style={{fontSize:20, fontWeight:'500'}}>Identitas</Text>
                <Text>Npm : {this.state.identity.npm}</Text>
                <Text>First Name : {this.state.identity.firstName}</Text>
                <Text>Middle Name : {this.state.identity.middleName}</Text>
                <Text>Last Name : {this.state.identity.lastName}</Text>
                <Text style={{fontSize:20, fontWeight:'500'}}>Educations</Text>
                {this.state.educations.map((education) => {
                        return (
                            <Text>{education.id}. {education.sekolah}</Text>
                        )
                })}
                <Text>Mobile Phone : {this.state.mobile_phone}</Text>
                <Text>Email : {this.state.email}</Text>
                <Text>Gender : {this.state.gender}</Text>
                <Text>Tall Body : {this.state.tall_body}</Text>
                <Text>Weight Body : {this.state.weight_body}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        borderWidth:1
    }
})

export default No4rcc;
