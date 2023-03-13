
import { StyleSheet, Text, View, TextInput} from 'react-native';

import React from 'react'

function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'lightblue',
        height:80,
        paddingTop:30,
        

    },

    title: {
        color:'white',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
    },



});

export default Header