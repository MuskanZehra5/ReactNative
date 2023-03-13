import React from "react";
import { FlatList,View, TouchableOpacity} from "react-native";
import tweets from "../../data/tweets";
import Message from "../Message";
import { StyleSheet } from "react-native";

const MessageFeed = () => (
    <View style={styles.container}>

    <FlatList data={tweets}
     renderItem={({item}) => (
        <TouchableOpacity><Message tweet={item} /></TouchableOpacity> )}
     keyExtractor={(item)=>item.id}
     />
        
    </View>
)

export default MessageFeed;

const styles = StyleSheet.create({

    container:{
        flex:1,
        width:'100%',

    },
});