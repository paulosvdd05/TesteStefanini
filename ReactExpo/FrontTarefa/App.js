import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { } from 'react-native-web';
import axios from 'axios';

const initialState = {
  tarefas: []
}

const API_URL = 'http://10.0.2.2:8080/tarefas';


export default class App extends Component {

  state = {
    ...initialState
  }

  fetchData = async () => {
    try {
      const response = await axios.get(API_URL);
      this.setState({ tarefas: response.data }, () => {
        console.log('Data fetched...', this.state.tarefas);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
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
