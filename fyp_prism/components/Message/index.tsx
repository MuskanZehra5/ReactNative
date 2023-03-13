import React from "react";
import { View } from "react-native";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";
import { TweetType } from "../../types";
import { StyleSheet } from "react-native";


export type MessageProps = {

    tweet:TweetType,
}

const Message =( {tweet}: MessageProps) => (

    <View style = {styles.maincontainer}>
        <View style = {styles.container}>
        {/* left image wala container */}
        <LeftContainer user={tweet.user} />
       
        {/* main content container */}
         <MainContainer tweet={tweet}/>
        </View>
    </View>

)

export default Message;

const styles = StyleSheet.create({

    maincontainer:{
        flex:1,
    },
    container:{
        flexDirection:'row',
        width:'100%',
        padding:15,
        borderBottomWidth:0.5,
        borderBottomColor:'grey',
        backgroundColor:'white',
        borderColor:'#f8f8f8',
        borderWidth:1,
        
    },


});