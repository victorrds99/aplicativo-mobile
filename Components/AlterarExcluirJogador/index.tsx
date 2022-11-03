import React, { useState } from "react";
import { Button,  View,Alert, Text } from "react-native";
import { TextInput, RadioButton } from 'react-native-paper';
import {styles } from './styles';
import Modal from "react-native-modal";

import axios from 'axios'
import { Jogador } from './../ListaJogadores/index';
const api = axios.create({baseURL: "http://127.0.0.1:8080/jogadores"});
export interface AlterarJogador{
  id_jogador:number;
  nome_jogador:string;
  posicao:string;

}

export function AlterarExcluirJogador(props:AlterarJogador) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState<string>();
  
  const [jogador, setJogador] = useState<Jogador>();
  const [value, setValue] = useState<string>();

  
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection:'row' }}>
        
        
        <View><Text>{props.id_jogador + "- DESEJA ALTERAR "+ props.nome_jogador + "?    " }</Text></View>
        <Text>Digite o nome do jogador: </Text>
        <TextInput 
          mode="outlined"
          label="Insira o jogador"
          placeholder="Adicione o jogador"
          right={<TextInput.Affix text="/100"/>}
          onChangeText={setText}
          value={text}/>
        
       
        <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style={{ flexDirection:'row', }}>
            <Text>Goleiro</Text>
            <RadioButton value="Goleiro" />
    
            <Text>Linha</Text>
            <RadioButton value="Linha" />
          </View>
        </RadioButton.Group>
        <Button
          title="Alterar"
          
                
                onPress={ () => {
                            console.log('props==',props)
                            api.put("/"+props.id_jogador,{
                                "nome_jogador":props.nome_jogador,
                                "posicao":props.posicao
                            })
                            
                            .then((info)=>{
                            
                            setJogador(info.data);
                            alert(info.data)
                            //voltar para a home
                        })
                        .catch(error => {console.log(error)});
                        } 
                        }
        />
        <Button
        title="Excluir"
        color="#f194ff"
        onPress={() => {
                            
          api.delete("/"+props.id_jogador)
          
          .then((info)=>{
          
          setJogador(info.data);
          alert(info.data)
          //voltar para home
        })
        .catch(error => {console.log(error)});
        } 
        }
      />
      </View>
    </View>
  );
}