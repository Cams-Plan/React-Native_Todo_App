import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { MaterialIcons } from '@expo/vector-icons';

const todoItem = ({ item, pressDeleteHandler, pressCheckHandler }) => {
  return (
      <View style={item.completed ? {...styles.item, borderColor: "green", borderStyle: "solid"} : styles.item} >
        {item.completed == true ? <TouchableOpacity>
          <MaterialIcons 
            name="check-box" 
            size={24} 
            color="green" 
            onPress={()=> pressCheckHandler(item.key)} />
        </TouchableOpacity> : <TouchableOpacity>
          <MaterialIcons name="check-box-outline-blank"
          size={24} color="black"
          onPress={()=> pressCheckHandler(item.key)} />
        </TouchableOpacity>}
        
        <Text style={styles.itemText}>   
          {item.text}
        </Text>
      <TouchableOpacity >  
        <MaterialIcons 
        name="delete" 
        size={23} 
        color="#d10606"
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
    borderWidth: 1.2,
    borderStyle: "dashed",
    borderRadius: 10
  },
  itemText: {
    marginLeft: 10,
    flex: 3,
    fontSize: 16
  },
  deleteIcon: {
    flex: 1,
    textAlign: "center",
    textAlignVertical: "center",
    padding: 10
  }
})

export default todoItem
