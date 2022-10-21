
import { View } from 'react-native';

import { Provider } from 'react-native-paper';
import { Header } from '../Header';
import { InputJogadores } from '../InputJogadores';
import { ListaJogadores } from '../ListaJogadores';
export function Checkin() {
  return (
    <Provider> 
    <View style={{ flex: 1, }}>
      <Header />
      
      <InputJogadores />
     
      
      <View style={{flex:3 }}>
        <ListaJogadores />
        
      </View>
    </View>
  </Provider> 
  );
}