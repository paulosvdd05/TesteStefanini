import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Platform } from 'react-native';
import axios from 'axios';

const initialState = {
  tarefas: []
}

const API_URL =  Platform.OS  == 'android' ? 'http://10.0.2.2:8080/tarefas' : 'http://localhost:8080/tarefas';


export default class App extends Component {

  state = {
    ...initialState
  }

  fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      this.setState({ tarefas: response.data }, () => {
        console.log('Tarefas:', this.state.tarefas);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };


  render() {
    return (
      <View style={styles.container}>
        <View>

          <View style={styles.lista}>
            <TouchableHighlight onPress={this.fetchData}>
              <View>
                <Text>Lista de tarefas</Text>
              </View>
            </TouchableHighlight>

          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e1e1',
    alignItems: 'center',
    justifyContent: 'center',

  },
  lista: {

    borderRadius: 10,
    backgroundColor: '#fff',
    flex: 1,
    shadowColor: '#171717',
    elevation: 10,
    margin: 40
  }
});
