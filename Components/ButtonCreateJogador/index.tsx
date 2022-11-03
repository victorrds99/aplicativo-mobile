import * as React  from 'react';
import { useState } from 'react';

import { View, Button } from 'react-native';
import { Portal, Modal, Provider, Text } from 'react-native-paper';
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
    const [visible, setVisible] = React.useState(false);
    
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};
    return(

    <Provider>    
        <View style={styles.container}>
           
            <Button 
                 
                title='Adicionar'
                onPress={ () => {
                            
                            api.post("/",{
                                "nome_jogador":props.nome,
                                "posicao":props.posicao
                            })
                            
                            .then((info)=>{
                            
                            setLista(info.data);
                            alert("Inserido com sucesso!")
                            
                        })
                        .catch(error => {console.log(error)});
                        } 
                        }
            />
            
        </View>
    </Provider>
    )
}
 