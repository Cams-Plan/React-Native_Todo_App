import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import * as components from "./components/index"

export default function App() {

  const [todos, setTodos] = useState([])

  const [statusMessage, setStatusMessage] = useState("")

  const [completed, setCompleted] = useState(0)

  const pressDeleteHandler = (key) => {
    setTodos((prev)=> {
      return prev.filter((todo)=> todo.key != key)
    })
    setStatusMessage("Sucessfully Removed")
      setTimeout(() => {
        setStatusMessage("");
      }, 2000);
  }
  const pressCheckHandler = (key) => {
    const updatedTasks = todos.map((todo) => {
      if (key === todo.key) {
        todo.completed ? setCompleted((prev) => prev - 1): setCompleted((prev)=> prev + 1)
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    
    setTodos(updatedTasks)
  }

  const submitHandler = (text) => {
    if (text.length > 3){
      setTodos((prev) => {
        return [
          {text: text, completed: false, key: `${prev.length + 1}`},
          ...prev
        ]
      })
      setStatusMessage("Todo Added")
      setTimeout(() => {
        setStatusMessage("");
      }, 2000);
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
          submitHandler={submitHandler}
          statusMessage={statusMessage} />
          <View style={styles.list} >
            {todos.length == 0 ?
            <Text style={styles.hint} >Empty List </Text> :
            <>
            <Text>{completed}/{todos.length} Completed</Text>
            <FlatList
            data={todos}
            renderItem={({ item })=> (
              <components.TodoItem 
              item={item} pressDeleteHandler={pressDeleteHandler} 
              pressCheckHandler={pressCheckHandler} />
            )}
            />
            </>}
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
    color: "#e34114",
    fontWeight: "500",
    fontSize: 18
  }

});
