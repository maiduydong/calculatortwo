

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import InputNumberButton from './src/InputNumberButton';

const buttons =[
  ['CLEAR','DEL'],
  [7,8,9,':'],
  [4,5,6,'x'],
  [1,2,3,'-'],
  [0,'.','=','+']

];
export default class App extends Component {
  
  renderButtons(){
    let layouts = buttons.map((buttonRows,index)=>{
      let rowItem = buttonRows.map((buttonItems, buttonIndex)=>{
    return <InputNumberButton 
    key ={'btn-' + buttonIndex}/>
  
    });
  return <View style ={styles.inputRow}
  key ={'row-' +index}>
    {rowItem}
  </View>
    }
  );
  return layouts
  }
  render() {
    return (
      <View style={styles.container}>

        <View style ={ styles.resultContainer}>
          <Text style ={styles.resultText}>0</Text>
        </View>



        <View style ={styles.inputContainer}>
              {this.renderButtons()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  resultContainer:{
    flex: 2,
    justifyContent:'center',
    backgroundColor:'green',

  },
  inputContainer:{
    flex: 8,
    backgroundColor: 'yellow'
  },
  resultText:{
    color: 'white',
    fontWeight:'bold',
    fontSize: 60,
    padding: 20,
    textAlign: 'right'
  }

});
