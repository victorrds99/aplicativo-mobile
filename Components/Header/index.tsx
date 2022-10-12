import { StatusBar } from 'expo-status-bar';
import {  Text, View, Image } from 'react-native';

import { MenuApp } from './../MenuApp/index';


export function Header() {

    
    return(    
        <View style={{flex: 1,
          justifyContent: 'space-around',
          alignItems:'stretch',
          flexDirection:'row', 
          marginTop:30}}>
      
        
          
          
          <View >
            <MenuApp></MenuApp>
          </View>
       
        
         <View >
          <Text 
               style={{fontSize:30, color: "black", fontWeight: "bold"
              }}>FutStack!
          </Text>
         
         </View>
         <View>
          <Image
            source={require('./logo512.png')}
            style={{width: 60, height:60}}
          />

          
        </View> 
          
  
        
        <StatusBar style="auto" />
  
        
      </View>
)};
    