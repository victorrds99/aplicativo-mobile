import * as React from 'react';
import {useState} from 'react';
import { View,TouchableOpacityProps } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ButtonCreateJogador } from '../ButtonCreateJogador';
import {styles} from './style'
import { RadioButton, Text, Portal, Modal, Provider , Button } from 'react-native-paper';


export interface InputJogadores{
    nome:string;
    posicao:string;
    
}


export function InputJogadores(){
    const [text, setText] = useState<string>();
    const [value, setValue] = useState<string>();
    

   
    
    return(
        
            <View style={styles.container}>
                <TextInput
                    
                    mode="outlined"
                    label="Adicione um jogador"
                    placeholder="Adicione um jogador"
                    right={<TextInput.Affix text="/100"/>}
                    onChangeText={setText}
                    value={text}
                />          
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={{ flexDirection:'row', }}>
                        <Text>Goleiro</Text>
                        <RadioButton value="Goleiro" />
                
                        <Text>Linha</Text>
                        <RadioButton value="Linha" />
                    </View>
                </RadioButton.Group>
                
                <ButtonCreateJogador nome={text} posicao={value}/>

                

               
                
            </View>
        
           
    )
}