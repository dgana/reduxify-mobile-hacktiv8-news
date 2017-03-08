import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={{fontSize:12}}>Made by Ida Bagus Chahya Dhegana</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flex: 0.5,
    alignItems: 'center',
    backgroundColor: 'gray',
    justifyContent: 'center'
  }
})

export default Footer
