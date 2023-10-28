import React from 'react'
import {StyleSheet, Text, View} from "react-native"

const header = () => {
  return (
    <View style={styles.header} >
      <Text style={styles.title} >Camille's Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral'
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  }
})

export default header
