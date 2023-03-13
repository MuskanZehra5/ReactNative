import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewTweetButton = () => {

    const navigation = useNavigation();

    const onPress=()=>{
        navigation.navigate('NewTweet')

    }

  return(  
    <TouchableOpacity style = {styles.addtweetbutton} onPress={onPress} activeOpacity={0.8}>
        
        <MaterialCommunityIcons name='text-box-plus-outline' size={30} color={Colors.light.background}></MaterialCommunityIcons>

    </TouchableOpacity>)
};

export default NewTweetButton;

const styles = StyleSheet.create({
    addtweetbutton:{
        backgroundColor:Colors.light.tint,
        padding:15,
        justifyContent:'center',
        borderRadius:100,
        position:'absolute',
        bottom:20,
        left:20,

        
    },
});