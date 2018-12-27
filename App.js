
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import logo from './assets/logo.png'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.logo}>
          <Image source={logo}></Image>
          <Text style={styles.welcome}> O Horóscopo do Cervejeiro </Text>
        </View>

        <View style={styles.start}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnStart}> START </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b0b0b',
    alignItems: 'stretch'
  },
  logo : {
    flex : 6.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color : 'white'
  },
  start : {
    flex : 0.5,
    alignItems: 'stretch',
    textAlign : 'center',
    margin : 15
  },
  btnStart : {
    color : '#000000',
    padding : 15,
    textAlign : 'center',
    backgroundColor : 'red'
  }
});
