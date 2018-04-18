

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';



export default class InputNumberButton extends Component {
  render() {
    return (
      
        <TouchableOpacity style ={styles.container}>

        </TouchableOpacity>

      
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      margin:1,
      backgroundColor: 'gray',
      justifyContent:'center',
      alignItems:'center'
    }
  
  });