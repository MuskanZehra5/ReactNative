import React from "react";
import { View,Text } from "react-native";
import { TweetType } from "../../../types";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import moment from "moment";

export type MainContainerProps = {
    tweet: TweetType
}

const MainContainer =( {tweet}: MainContainerProps) => (

    <View style={styles.container}>
       {/* username */} 
       <View style={styles.msgheadercontainer}>
            <View style={styles.msgheadernames}>
                <Text style={styles.name}>{tweet.user.name}</Text>
                <Text style={styles.username}>@{tweet.user.username}</Text>
                <Text style={styles.createdat}>{moment(tweet.createdAt).fromNow()}</Text>
            </View>

       </View>
       {/* Msg content */}
       <View>

        <Text style={styles.content}>{tweet.content.slice(0,80)}...</Text>
       </View>

    </View>

)

export default MainContainer;

const styles = StyleSheet.create({

    container:{
        flex:1,
        marginHorizontal:10,
    },
    msgheadercontainer:{
        flexDirection:'row',
        justifyContent:'space-between',

    },

    msgheadernames:{
        flexDirection:'row',
    },

    name:{
        fontWeight:'bold',
        marginRight:5,
        
    },

    username:{
        color:'grey',
       marginHorizontal:5,
    },

    createdat:{
        color:'grey',
        marginHorizontal:5,

    },

    image:{
        width:'100%',
        height:200,
        borderRadius:10,
        borderColor:'grey',
        marginVertical:10,
        resizeMode:'cover',
        overflow:'hidden',

    },

    content:{
        lineHeight:19,
        marginTop:7,
        

    },



});