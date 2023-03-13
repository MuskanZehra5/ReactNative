import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList} from 'react-native';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import Addtodo from './components/addtodo';

export default function App() {

  const [todos,setTodos]= useState([
    { task:'eat lunch', key:1 },
    { task:'do homework', key:2 },
    { task:'go to sleep', key:3 },
    { task:'do some exercise', key:4 },
  ])

  const pressHandler = (key) => {
    setTodos((prevtodos) => {
      return prevtodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (task) => {
    
    setTodos((prevtodos) => {
      return [ ...prevtodos, {task: task, key: todos.length+1 }];
    })
  }

  return (
    <View style={styles.container}>
   {/* header */}
        <Header></Header>

        {/* add todo form */}
        <Addtodo submitHandler={submitHandler}/>

      <View style={styles.content}>
     
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem={({item}) => (
            <TodoItem item={item} pressHandler={pressHandler}/>

          )}
          />
        </View>
      </View>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding:50,
  },

  list: {
    marginTop:30,
  },

});
