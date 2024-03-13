import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Modal, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/MaterialIcons';

export default class Adicionar extends Component {
    state = {
        titulo: '',
        descricao: '',
        status: '',

    }

    render() {
        return (
            <Modal
                transparent={true} visible={this.props.isVisible} onRequestClose={this.props.onCancel} animationType='slide'
            >
                <View style={styles.frame}>
                    <View style={styles.container}>


                        <Text style={styles.header}>Nova Tarefa</Text>
                        <View style={styles.containerInput}>
                            <TextInput
                                placeholder="Titulo..."
                                style={styles.input}
                                onChangeText={titulo => this.setState({ titulo })}
                                value={this.state.titulo}
                            />
                        </View>
                        <View style={styles.containerInput}>
                            <TextInput
                                placeholder="Descrição..."
                                style={styles.input}
                                onChangeText={descricao => this.setState({ descricao })}
                                value={this.state.descricao}
                            />
                        </View>
                        <View style={styles.containerInput}>
                            <TextInput
                                placeholder="Status..."
                                style={styles.input}
                                onChangeText={status => this.setState({ status })}
                                value={this.state.status}
                            />
                        </View>

                        <View style={styles.botoes}>
                            <TouchableOpacity onPress={this.props.onCancel}>
                                <View style={styles.botoes}>
                                    <Ionicons name="close" size={50} color="red" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.adicionarTarefa(this.state.titulo, this.state.descricao, this.state.titulo)}>
                                <View style={styles.botoes}>
                                    <Ionicons name="check" size={50} color="green" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold'
    },

   botoes:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginTop: 20
   },
    containerInput: {
        flexDirection: 'row'
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
})
