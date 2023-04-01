import React from 'react';
import { View,Text, StyleSheet } from 'react-native';

const No4rfc = () => {
    const biodata ={
        identity:{
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

    return (
        <View style={styles.container}>
            <Text style={{fontWeight:"bold", fontSize:30}}>NO.4 RFC</Text>
            <Text style={{fontSize:20, fontWeight:'500'}}>Identitas</Text>
            <Text>Npm : {biodata.identity.npm}</Text>
            <Text>First Name : {biodata.identity.firstName}</Text>
            <Text>Middle Name : {biodata.identity.middleName}</Text>
            <Text>Last Name : {biodata.identity.lastName}</Text>
            <Text style={{fontSize:20, fontWeight:'500'}}>Educations</Text>
            {biodata.educations.map((education) => {
                return (
                    <Text>{education.id}. {education.sekolah}</Text>
                )
            })}
            <Text>Mobile Phone : {biodata.mobile_phone}</Text>
            <Text>Email : {biodata.email}</Text>
            <Text>Gender : {biodata.gender}</Text>
            <Text>Tall Body : {biodata.tall_body}</Text>
            <Text>Weight Body : {biodata.weight_body}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        borderWidth:1
    }
})
export default No4rfc;
