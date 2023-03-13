import React from "react";
import { View,Text } from "react-native";
import { StyleSheet } from "react-native";
import { TweetType } from "../../../../types";
import { AntDesign,MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import Colors from "../../../../constants/Colors";



export type FooterProps = {

    tweet:TweetType,
}

const Footer=( {tweet}: FooterProps) => (

    <View style = {styles.container}>

        <View style={styles.iconcontainer}>
            <SimpleLineIcons name='like' size={20} color={Colors.light.tint}></SimpleLineIcons>
            <Text style={styles.numbers}> {tweet.numberofLikes}</Text>
        </View>

        <View style={styles.iconcontainer}>
            <MaterialCommunityIcons name='comment-outline' size={20} color={Colors.light.tint}></MaterialCommunityIcons>
            <Text style={styles.numbers}> {tweet.numberofComments}</Text>
        </View>

        <View style={styles.iconcontainer}>
            <AntDesign size={20} name="retweet" color={Colors.light.tint}></AntDesign>
            <Text style={styles.numbers}> {tweet.numberofRetweets}</Text>
        </View>

        <View style={styles.iconcontainer}>
            <SimpleLineIcons name='share' size={20} color={Colors.light.tint}></SimpleLineIcons>
            
        </View>

        
    </View>

)

export default Footer;

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        width:'100%',
        paddingVertical:15,
        justifyContent:'center',
        
    },

    iconcontainer:{

        flexDirection:'row',
        marginHorizontal:10,
        alignItems:'center',

    },

    numbers:{
        color:'grey',

    },


});