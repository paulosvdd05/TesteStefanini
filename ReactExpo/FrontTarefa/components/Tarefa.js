import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import commonStyles from '../commonStyles'



export default props => {
    let { onSelect, ...restoProps } = props
    const renderizarLinha = (campo, titulo) => {
        if (campo != '') {
            return (<View style={styles.tabelaContainer}>
                <Text style={styles.name}>{titulo}</Text>
                <Text style={styles.desc}>{campo}</Text>
            </View>)
        }
    }
    return (
        
            <View style={[styles.tarefa, { backgroundColor: props.index % 2 == 0 ? "#ffffff" : "#F2F2F2" }]}>
                <View style={{ backgroundColor: commonStyles.colors.primary }}>
                    <Text style={styles.name}>ID: {props.id}</Text>
                </View>

                <View style={{ justifyContent: 'space-around' }}>
                    {renderizarLinha(props.titulo, 'Titulo')}
                    {renderizarLinha(props.descricao, 'Descrição')}
                    {renderizarLinha(props.status, 'Status')}
                   
                    
                </View>
            </View>

    )
}

const styles = StyleSheet.create({
    tarefa: {
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: commonStyles.colors.primary,

    },
    name: {
        color: commonStyles.colors.tertiary,
        fontSize: 22,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    },
    desc: {
        color: commonStyles.colors.tertiary,
        fontSize: 20,

    },
    valor: {
        color: commonStyles.colors.tertiary,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    qntd: {
        color: commonStyles.colors.tertiary,
        textAlign: 'right'
    },
    id: {
        color: commonStyles.colors.tertiary,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 15,
        borderRightWidth: 1,
        borderColor: commonStyles.colors.tertiary
    },
    tabelaContainer: {
       
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: commonStyles.colors.primary,
        paddingVertical: 10,
        marginHorizontal: 10
    }
})