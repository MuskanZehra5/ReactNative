import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import MessageFeed from '../components/MessageFeed';
import MessageHeader from '../components/MessageHeader';
import tweets from '../data/tweets';

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      
      <View style = {styles.topHeader}>
        <MessageHeader/>

      </View>
      <MessageFeed/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  topHeader:{
    
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    
    
  },
});
