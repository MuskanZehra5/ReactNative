import React from "react";
import { View } from "react-native";
import LeftProfileContainer from "./LeftProfileContainer";
import { TweetType } from "../../types";
import { StyleSheet } from "react-native";
import { SearchBar } from "react-native-screens";
import SearchBarContainer from "./SearchBarContainer";


export type MessageProps = {

    //  tweet:TweetType,
}

const MessageHeader =( {}: MessageProps) => (

    <View style = {styles.maincontainer}>
        <View style = {styles.container}>
        {/* left image wala container */}
        <View style = {styles.leftContainer}>

            <LeftProfileContainer />
        </View>
       
        {/* main content search container */}
        <View style = {styles.searchbarContainer}>
            <SearchBarContainer/>
        </View>
        </View>
    </View>

)

export default MessageHeader;

const styles = StyleSheet.create({

    maincontainer:{
        flex:1,
    },

    leftContainer:{
        marginRight:15,

    },

    searchbarContainer:{
        width:'80%',

    },


    container:{
        flexDirection:'row',
        width:'100%',
        padding:5,
        backgroundColor:'#f8f8f8',
    },


});