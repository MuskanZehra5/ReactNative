import React from 'react'
import { StyleSheet, Text, View,} from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function TodoItem(props) {
  return (
    <TouchableOpacity onPress={() => props.pressHandler(props.item.key)}>
        <Text style={styles.item}>{props.item.key} {props.item.task}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    item: {
        padding:16,
        marginTop:16,
        backgroundColor:"pink",
        borderColor:'gray',
        borderRadius:5,
        borderWidth:1,
        color:'white',
        fontWeight:'bold',
        
    },
})