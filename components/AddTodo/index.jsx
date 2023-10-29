import React, {useState} from 'react'
import {Button, StyleSheet, Text, TextInput, View} from "react-native"
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AddTodo = ({ submitHandler, statusMessage }) => {

  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  }

  return (
    <View>
      <TextInput
      style={styles.input}
      placeholder='new todo'
      onChangeText={changeHandler} />
      <Button 
      title="add todo"
      onPress={() => submitHandler(text)}
      color="coral"
       />
       <Text style={statusMessage == "Sucessfully Removed" ? {...styles.statusMessage, color: "#1433e3"} : styles.statusMessage} >{statusMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  statusMessage: {
    textAlign: "center",
    marginTop: 10,
    color: "#48a324"
  }
})

export default AddTodo
