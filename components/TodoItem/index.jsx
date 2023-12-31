import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

const todoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={()=> pressHandler(item.key)}>
      <View style={styles.item} >
        <MaterialIcons name="delete" size={24} color="black" />
        <Text style={styles.itemText} >{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10
  },
  itemText: {
    marginLeft: 10,
  }
})

export default todoItem
