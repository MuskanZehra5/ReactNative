import React from "react";
import { FlatList,View } from "react-native";
import tweets from "../../data/tweets";
import Tweet from "../Tweet";
import { StyleSheet } from "react-native";

const Feed = () => (
    <View style={styles.container}>

    <FlatList data={tweets}
     renderItem={({item}) => (<Tweet tweet={item} />)}
     keyExtractor={(item)=>item.id}
     />
        
    </View>
)

export default Feed;

const styles = StyleSheet.create({

    container:{
        flex:1,
        width:'100%',

    },
});