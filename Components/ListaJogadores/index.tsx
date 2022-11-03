
import {useState, useEffect} from 'react';
import { SectionList,Button, StyleSheet, Text, View, Alert , TouchableOpacity } from 'react-native';
import {styles} from './style'
import axios from 'axios';
import Modal from "react-native-modal";
import { AlterarExcluirJogador } from '../AlterarExcluirJogador';


const api = axios.create({baseURL: "http://127.0.0.1:8080/jogadores/"});

export interface Jogador {
  id_jogador:number;
  nome_jogador:string;
  posicao:string;
}


export function ListaJogadores(){
  const [lista, setLista] = useState<Jogador[]>([]);
  const [jogador, setJogador] = useState<Jogador>({  id_jogador: 0,
    nome_jogador: '',
    posicao: ''});
  const goleiros = [];
  const linhas = [];
  const outros = [];
  
 

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  
  for (let i = 0; i < lista.length; i++) { 
    
    if (lista[i].posicao == "goleiro"){
    goleiros.push(<Text>{lista[i].nome_jogador}</Text>);
    }
    else if (lista[i].posicao == "linha"){
      linhas.push(<Text>{lista[i].nome_jogador}</Text>);
    }
    else {outros.push(<Text>{lista[i].nome_jogador}</Text>);
    }

    lista[i].id_jogador;
    lista[i].nome_jogador;
    lista[i].posicao;

  }
  console.log(lista)

  const modal = (jogadore:Jogador) =>{
    
    setJogador(jogadore)
    toggleModal()
  }
  console.log("aaa",jogador)
   
    return(
      
      <View style={styles.container}>
          <View style={styles.container}>

            <Modal isVisible={isModalVisible}>
              <View style={{ flex: 1 }}>
                <View>
                  <AlterarExcluirJogador id_jogador={jogador.id_jogador} nome_jogador={jogador.nome_jogador} posicao={jogador.posicao}/>
                </View>
                  
                <Button title="Voltar" onPress={() =>{
                  toggleModal() 

                }} />
              </View>
            </Modal>
            <Button title="Carregar" onPress={ 
              () => {
              console.log("Botao apertado");
              api.get("/lista")
              .then((info)=>{
            
              setLista(info.data);
          })
            .catch(error => {console.log(error)});
            } 
            }/>
      
       

        <SectionList 
          sections={[
            {title: 'Goleiros', data: lista},
            {title: 'Linhas', data: linhas}
            
          ]}
          renderItem={({item}) => (
          <View >
            <TouchableOpacity style={styles.item} onPress={() => modal(item)} >
              <Text>
                {item.nome_jogador}
              </Text>
            </TouchableOpacity>

            
          </View>
          )}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => `basicListEntry-${item}`}
          
        />  
         
      </View>
      </View> 
    )
}