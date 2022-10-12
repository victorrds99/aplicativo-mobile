import * as React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import {styles } from './style'

export interface ButtonCreateJogador{
    nome:string|undefined;
    posicao:string|undefined;

}
export function ButtonCreateJogador(props:ButtonCreateJogador) {

    return(
        <View style={styles.container}>
            <Button icon="camera" mode="contained" onPress={() => console.log(props.nome + props.posicao)}>
                Adicionar 
            </Button>
        </View>
    )
}
 