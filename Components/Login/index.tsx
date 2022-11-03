import * as React from 'react';
import {useState} from 'react';
import { View,TouchableOpacityProps,  Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ButtonCreateJogador } from '../ButtonCreateJogador';
import {styles} from './style'
import { RadioButton, Text, Portal, Modal, Provider  } from 'react-native-paper';
import { Header } from './../Header/index';




export function Login(){
    const [login, setLogin] = useState<string>();
    const [senha, setSenha] = useState<string>();
    

   
    
    return(

            <View style={styles.container}>
                <Header />
                <TextInput
                    
                    mode="outlined"
                    label="Digite seu Login"
                    placeholder="Adicione um jogador"
                    right={<TextInput.Affix text="/10"/>}
                    onChangeText={setLogin}
                    value={login}
                /> 

                <TextInput
                    
                    mode="outlined"
                    label="Digite sua senha"
                    placeholder="Digite sua senha"
                    right={<TextInput.Affix text="/8"/>}
                    onChangeText={setSenha}
                    value={senha}
                />           
                 

                <Button 
                    title="Entrar"
                    onPress={() => {console.log("Loguei!!! quero meu token")}}
                    />

               
                
            </View>
        
           
    )
}