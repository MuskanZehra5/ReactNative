import React from 'react'
import { StyleSheet, Text, View,TextInput} from 'react-native';
import { useState } from 'react';
import { Button } from 'react-native';

export default function Addtodo(props) {
    const [task,setTask] = useState("")

    const changeHandler = (val) => {
        setTask(val)

    }
  return (
    <View>
        <View style={styles.form}>
            <TextInput
            placeholder='Enter your task here...'
            multiline
            onChangeText={(e)=> changeHandler(e)}
            style={styles.input}
            />
        <Button onPress={() => props.submitHandler(task)} title="Add" color='lightblue'></Button>
        </View>

    </View>
  )
}

const styles = StyleSheet.create({

    form: {
        padding:15,
        margin:20,
    },

    input: {

        padding:10,
        marginBottom:10,
        borderColor:'gray',
        borderBottomWidth:1,
        borderLeftWidth:1,

    }

})