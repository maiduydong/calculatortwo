

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';



export default class InputNumberButton extends Component {
	render(){
		const {value, handleOnPress} = this.props;
		
		return(
			<TouchableOpacity style = {styles.container}
			OnPress={()=> handleOnPress(value)}>
				<Text style ={styles.text}>{value}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
      margin:  1,
      backgroundColor: 'yellow',
      justifyContent: 'center',
      borderRadius: 50,
      justifyContent:'center',
      alignItems: 'center',
      borderColor: 'red',
      borderWidth: 2
    },
    text:{
      fontSize: 45,
      color: 'black',
      margin: 15
      
      
    }
    
    
  }
  );