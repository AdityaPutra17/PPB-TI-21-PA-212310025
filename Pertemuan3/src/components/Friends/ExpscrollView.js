import React from 'react';
import {FlatList, ScrollView, SectionList, StyleSheet, Text} from 'react-native';
import UserItems from './UserItems';

const ExpscrollView = ({Users}) => {
    const data = [{title :"Suggested", data:Users},
                  {title :"Followers", data:Users}];
    return (
        // <FlatList data={Users} renderItem={({item})=><UserItems item={item}/>}/>
        <ScrollView>
            <Text style={styles.Text}>Friends</Text>
            {Users.map((v,index)=>(
                <UserItems item={v} key={index}/>
            ))}
        </ScrollView>
        // <SectionList sections={data}
        //             renderItem={({item})=><UserItems item={item}/>}
        //             renderSectionHeader={({section:{title}})=>(<Text style={{color:"white"}}>{title}</Text>)}
        // />
    )
}

const styles = StyleSheet.create({
    Text:{
        color:'white',
        fontSize:18,
        paddingLeft:18,
    }
})

export default ExpscrollView;
