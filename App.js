// calculator app

/*
    ISSUES
    - after pressing '=' sign, if number is pressed, input should be reset, not appended
    - when pressing a function, input should not change to '0'
    - decimals don't work
*/

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AppRegistry
} from 'react-native';
import Style from './src/Style';
import InputButton from './src/InputButton';

// Define the input buttons that will be displayed in the calculator.
const numberInputs = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
  ['.', 0, '=']
];

const functionInputs = [
  ['DEL'],
  ['/'],    // find a better way to display 'divide' sign
  ['*'],    // same goes for * sign!
  ['-'],
  ['+']
];

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      previousInputValue: 0,
      inputValue: 0,
      decimal: false,
      selectedSymbol: null
    }
  }

  render() {
    return (
      <View style={Style.root}>
        <View style={Style.display}>
          <Text style={Style.displayText}>{this.state.inputValue}</Text>
        </View>
        <View style={Style.input}>
          <View style={Style.numbers}>
            {this._renderNumberInputs()}
          </View>
          <View style={Style.functions}>
            {this._renderFunctionInputs()}
          </View>
        </View>
      </View>
    );
  }


  /**
  * For each row in `numberInputs`, create a row View and add create an InputButton for each input in the row.
  **/

  _renderNumberInputs() {
    let views = [];

    for (var r = 0; r < numberInputs.length; r++) {
      let row = numberInputs[r];

      let inputRow = [];
      for (var i = 0; i < row.length; i++) {
        let input = row[i];

        inputRow.push(
          <InputButton
            value={input}
            highlight={this.state.selectedSymbol === input}
            onPress={this._onInputButtonPressed.bind(this, input)}
            key={r + "-" + i} />
        );
      }

      views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }

  _renderFunctionInputs() {
    let views = [];

    for (var r = 0; r < functionInputs.length; r++) {
      let row = functionInputs[r];

      let inputRow = [];
      for (var i = 0; i < row.length; i++) {
        let input = row[i];

        inputRow.push(
          <InputButton
            value={input}
            highlight={this.state.selectedSymbol === input}
            onPress={this._onInputButtonPressed.bind(this, input)}
            key={r + "-" + i} />
        );
      }

      views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }

    return views;
  }



  _onInputButtonPressed(input) {
    switch (typeof input) {
      case 'number':
        return this._handleNumberInput(input)
      case 'string':
        return this._handleStringInput(input)
    }
  }

  /* fix this for decimals */

  _handleNumberInput(num) {
    let inputValue = num;
    if (this.state.decimal == false) {
      inputValue = inputValue + (this.state.inputValue * 10);
    } else {
      inputValue = inputValue + (this.state.inputValue * .1);
    }
    //alert(this.state.decimal);

    this.setState({
      inputValue: inputValue
    })
  }

  _handleStringInput(str) {
    switch (str) {
      case '=':
        let symbol = this.state.selectedSymbol,
          inputValue = this.state.inputValue,
          previousInputValue = this.state.previousInputValue;

        if (!symbol) {
          return;
        }

        this.setState({
          previousInputValue: 0,
          inputValue: eval(previousInputValue + symbol + inputValue),
          selectedSymbol: null
        });
        break;

      case '/':
      case '*':
      case '+':
      case '-':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: 0,
        });
        break;

      case 'DEL':
        this.setState({
          previousInputValue: 0,
          inputValue: 0,
          selectedSymbol: null,
          decimal: false
        });
        break;

      case '.':
        this.setState({
          selectedSymbol: str,
          previousInputValue: this.state.inputValue,
          inputValue: this.state.inputValue + str,
          decimal: true
        });
        break;
    }

  }

}

// AppRegistry.registerComponent('calculatorApp', () => calculatorApp);