// Style.js

import { StyleSheet } from 'react-native';
import { blue } from 'ansi-colors';

var Style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#BBDEFB'
  },

  display: {
    flex: 2,
    backgroundColor: '#5C6BC0',
    justifyContent: 'center',
    opacity: 1
  },

  displayText: {
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 30,
    marginTop: 40,
  },

  input: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#5C6BC0',
    margin: 10,
    marginTop: 15
  },

  numbers: {
    flex: 3,
    backgroundColor: '#BBDEFB'
  },

  functions: {
    flex: 1,
    backgroundColor: '#BBDEFB'
  },

  inputRow: {
    flex: 1,
    flexDirection: 'row'
  },

  inputButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5C6BC0',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#BBDEFB'
  },

  inputButtonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white'
  },

  inputButtonHighlighted: {
    backgroundColor: '#1A237E'
  }

});

export default Style;