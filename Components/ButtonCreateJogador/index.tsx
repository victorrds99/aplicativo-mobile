import * as React  from 'react';
import { useState } from 'react';

import { View } from 'react-native';
import { Button } from 'react-native-paper';
import {styles } from './style'
import axios from 'axios'
import { Jogador } from './../ListaJogadores/index';


const api = axios.create({baseURL: "http://127.0.0.1:8080/jogadores"});



export interface ButtonCreateJogador{
    nome:string|undefined;
    posicao:string|undefined;

}

export function ButtonCreateJogador(props:ButtonCreateJogador) {
    const [lista, setLista] = useState<Jogador[]>([]);
    
    return(
        <View style={styles.container}>
            <Button 
                icon="camera" 
                mode="contained" 
                onPress={ () => {
                            console.log("Botao apertado");
                            api.post("/",{
                                "nome_jogador":props.nome,
                                "posicao":props.posicao
                            })
                            
                            .then((info)=>{
                            
                            setLista(info.data);
                        })
                        .catch(error => {console.log(error)});
                        } 
                        }
            >
                Adicionar 
            </Button>
        </View>
    )
}
 