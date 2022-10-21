
import {useState, useEffect} from 'react';
import { SectionList,Button, StyleSheet, Text, View, FlatList } from 'react-native';
import {styles} from './style'
import axios from 'axios'

const api = axios.create({baseURL: "http://127.0.0.1:8080/jogadores/"});

export interface Jogador {
  id_jogador:number;
  nome_jogador:string;
  posicao:string;
}

export function ListaJogadores(){
  const [lista, setLista] = useState<Jogador[]>([]);
  const goleiros = [];
  const linhas = [];
  const outros = [];

  for (let i = 0; i < lista.length; i++) { 
    
    if (lista[i].posicao == "goleiro"){
    goleiros.push(<Text>{lista[i].nome_jogador}</Text>);
    }
    else if (lista[i].posicao == "linha"){
      linhas.push(<Text>{lista[i].nome_jogador}</Text>);
    }
    else {outros.push(<Text>{lista[i].nome_jogador}</Text>);
    }
  }
  console.log(lista)
  
    return(
      
      <View style={styles.container}>
          <View style={styles.container}>

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
            {title: 'Goleiro', data: lista},
            {title: 'Linha', data: lista}
            
          ]}
          renderItem={({item}) => (
          <Text style={styles.item}>
            {item.nome_jogador}
          </Text>
          )}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => `basicListEntry-${item}`}
          
        />  
         
      </View>
      </View> 
    )
}