import { StyleSheet, TouchableOpacity,SafeAreaView ,TextInput} from 'react-native';

import { Text, View } from '../components/Themed';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



export default function NewTweetScreen() {

  const navigation = useNavigation();

    const onPress=()=>{
        navigation.navigate('Root')

    }

  const onPostTweet = () => {
    console.log("posting ${tweet}")

  }

  const [tweet,setTweet] = useState("");
  const [imageurl,setImageurl] = useState("");

  return (

   
      <SafeAreaView style={styles.container}>

        <View style={styles.topHeader}>
          <Ionicons name='close-outline' color={Colors.light.tint} size={30} onPress={onPress}/>
          <TouchableOpacity style={styles.postButton} onPress={onPostTweet}>
            <Text style={styles.postButtonText} >Post</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.newpostcontainer}>
          <ProfilePicture image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtLSq8bKPeKUXmGXml1M_6gq0ZrfK7o1VFVxaWRd5e0AvZEdInuEel6PjEUnM4gK5cf0&usqp=CAU'></ProfilePicture>
          <View style={styles.inputcontainer}>
            <TextInput 
            value={tweet}
            onChangeText={(val)=> {setTweet(val)}}
            numberOfLines={3}
            multiline={true}
            style={styles.tweetinput}
            placeholder={"What's on your mind?"}
            
            />

            <TextInput 

            value={imageurl}
            onChangeText={(val)=> {setImageurl(val)}}
            style={styles.imageinput}
            placeholder={"image (optional)"}
            
            />
          </View>
        </View>
      </SafeAreaView>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },

  newpostcontainer:{
 
    flexDirection:'row',
    padding:15,

  },

  imageinput:{

  },

  tweetinput:{
    height:100,
    maxHeight:300,
    fontSize:18,

  },


  inputcontainer:{
    flex:1,
    marginLeft:10,
  },

  topHeader:{
    
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    padding:15,
    paddingTop:30,
    
  },

  postButton:{
    backgroundColor:Colors.light.tint,
    borderRadius:20,
  },

  postButtonText:{
    color:'#fff',
    paddingVertical:8,
    paddingHorizontal:25,
    fontWeight:'bold',
    fontSize:17,
  },

});
