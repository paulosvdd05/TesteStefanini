import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Dimensions, Platform, FlatList } from 'react-native';
import axios from 'axios';
import Ionicons from '@expo/vector-icons/AntDesign';

import Tarefa from './components/Tarefa';
import Adicionar from './components/Adicionar';
import commonStyles from './commonStyles';

const initialState = {
  tarefas: [],
  showAdicionarTarefa: false,
  id: ''
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const API_URL = Platform.OS == 'android' ? 'http://10.0.2.2:8080/tarefas' : 'http://localhost:8080/tarefas';


export default class App extends Component {

  state = {
    ...initialState
  }

  componentDidMount = () => {
    this.fetchData();

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



  renderTarefa = ({ item, index }) => {
    return (
      <Tarefa {...item} index={index} />
    )
  }

  adicionarTarefa = (titulo, descricao, status) => {
    const tarefa = { titulo, descricao, status };
    axios.post(API_URL, tarefa)
      .then(() => {
        this.fetchData();
        this.setState({ showAdicionarTarefa: false });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  pesquisarTarefa = () => {
    if (this.state.id == '') {
      this.fetchData();
      return;
    }
    axios.get(`${API_URL}/${this.state.id}`)
      .then(response => {
        console.log('Tarefa:', response.data);
        response.data == '' ? this.setState({ tarefas: [] }) : this.setState({ tarefas: [response.data] })

      })

      .catch(error => {
        console.error('Error:', error);
      });
  }


  render() {
    return (
      <View style={styles.container}>
        <Adicionar isVisible={this.state.showAdicionarTarefa} adicionarTarefa={this.adicionarTarefa} onCancel={() => this.setState({ showAdicionarTarefa: false })} />
        <View>

          <View style={styles.lista}>

            <View style={{ backgroundColor: commonStyles.colors.primary, padding: 10 }}>
              <Text style={styles.buttonText}>Lista de Tarefas</Text>
            </View>

            <View style={styles.containerInput}>
              <TextInput placeholder="Digite o id da tarefa..."
                style={styles.input}
                onChangeText={id => this.setState({ id })}
                value={this.state.id}
                onEndEditing={this.pesquisarTarefa} />
              <TouchableOpacity style={styles.buttonPesquisar} onPress={this.pesquisarTarefa}>
                <Ionicons name="search1" size={30} color={commonStyles.tertiary} />
              </TouchableOpacity>
            </View>




            <View style={{ flex: 1, padding: 20 }}>
              {this.state.tarefas != "" ?
                <FlatList
                  data={this.state.tarefas}
                  keyExtractor={item => `${item.id}`}
                  renderItem={this.renderTarefa}
                />
                : <View style={{ justifyContent: "center", alignItems: "center" }}> <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 20 }}>Nenhuma tarefa encontrada</Text>
                  <TouchableOpacity onPress={() => this.setState({ id: "" }, () => {
                    this.fetchData()
                  })}>
                    <Text style={{ color: commonStyles.colors.primary }}>Limpar Busca</Text>
                  </TouchableOpacity></View>}

            </View>

          </View>

          <TouchableOpacity style={styles.button} onPress={() => this.setState({ showAdicionarTarefa: true })}>
            <Ionicons name="pluscircle" size={35} color={commonStyles.tertiary} />
          </TouchableOpacity>

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
    height: height - 100,
    shadowColor: '#171717',
    elevation: 10,
    marginTop: 40,

  },
  button: {
    flex: 1,
    backgroundColor: '#ffaa00',
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,

  },
  buttonText: {
    fontSize: 20,
    color: commonStyles.colors.tertiary,
    textAlign: 'center',
    fontWeight: 'bold',
    elevation: 10,
    shadowColor: '#171717'
  },
  input: {
    height: 40,
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#171717',
    elevation: 10,
    flex: 1
  },
  containerInput: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 10
  },
  buttonPesquisar: {
    alignItems: 'center',
    backgroundColor: commonStyles.colors.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 10,
    padding: 10,
  }
});
