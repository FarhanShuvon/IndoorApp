import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AddPlayground() {
  return (
    <View style={ styles.container}>
      <Text style={ styles.text}>AddPlayground</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // Centers vertically
      alignItems: 'center',     // Centers horizontally
      backgroundColor: '#f5f5f5', // Optional: background color
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
  });