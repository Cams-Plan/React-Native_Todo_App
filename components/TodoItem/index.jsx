import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

const todoItem = ({ item, pressDeleteHandler }) => {
  return (
    
      <View style={styles.item} >
        <MaterialIcons name="check-box-outline-blank" 
        size={24} color="black" />
        <Text style={styles.itemText}>   
          {item.text}
        </Text>
      <TouchableOpacity >  
        <MaterialIcons 
        name="delete" 
        size={23} 
        color="black"
        style={styles.deleteIcon} 
        onPress={()=> pressDeleteHandler(item.key)}/>
      </TouchableOpacity>  
      </View>
    
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
    flex: 3,
    backgroundColor: "pink",
    fontSize: 16
  },
  deleteIcon: {
    flex: 1,
    backgroundColor: "grey",
    textAlign: "center",
    padding: 10
  }
})

export default todoItem
