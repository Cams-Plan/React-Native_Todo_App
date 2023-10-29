import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import * as components from "./components/index"

export default function App() {

  const [todos, setTodos] = useState([
    {text: "buy coffee", status: "incomplete", key: '1'},
    {text: "drink coffee", status: "incomplete", key: '2'},
    {text: "clean coffee machine", status: "incomplete", key: '3'},

  ])

  const pressDeleteHandler = (key) => {
    setTodos((prev)=> {
      return prev.filter((todo)=> todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3){
      setTodos((prev) => {
        return [
          {text: text, status: "incomplete", key: `${prev.length + 1}`},
          ...prev
        ]
      })
    } else {
      Alert.alert('OOPS','Todos must me over 3 characters', [{
        text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }
    
  }
  
  return (
    // <components.Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
        <View style={styles.container}>
        {/* header */}
        <components.Header/>
        <View style={styles.content} >
          {/* todo form */}
          <components.AddTodo 
          submitHandler={submitHandler}/>
          <View style={styles.list}  >
            <FlatList
            data={todos}
            renderItem={({ item })=> (
              <components.TodoItem 
              item={item} pressDeleteHandler={pressDeleteHandler} />
            )}
            />
            <Text style={styles.hint} >Click on Todo to Remove</Text>
          </View>
        </View>
        <StatusBar style={{backgroundColor: styles.container.backgroundColor}} />
      </View>
    </TouchableWithoutFeedback>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  hint : {
    marginTop: 20,
    textAlign: 'center',
    color: "#b5836e"
  }

});
