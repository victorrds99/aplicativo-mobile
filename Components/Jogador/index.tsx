import  {useState}  from 'react';
import { SafeAreaView , View} from 'react-native';
import { Card, Button } from 'react-native-paper';
import Modal from "react-native-modal";
import { AlterarExcluirJogador } from '../AlterarExcluirJogador';

export interface Jogador{
    id:number;
    nome:string|undefined;
    posicao:string|undefined;
  
  }
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

const Jogador = () => (

  <SafeAreaView>
   
    <Card>
        <Card.Actions>
        <Button onPress={toggleModal}>Cancel</Button>
        <Button>Ok</Button>
        </Card.Actions>
    </Card>
  </SafeAreaView>
);

export default Jogador;