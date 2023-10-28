import React, {useState} from 'react'
import {Button, StyleSheet, Text, TextInput, View} from "react-native"
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AddTodo = ({ submitHandler }) => {

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
  }
})

export default AddTodo
