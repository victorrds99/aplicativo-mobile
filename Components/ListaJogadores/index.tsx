
import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import {styles} from './style'



    

export function ListaJogadores(){

    
    return(
       <View style={styles.container}>
           <View style={styles.container}>
        <SectionList
          sections={[
            {title: 'Goleiro', data: ['Devin', 'Dan', 'Douglas', 'Dominic']},
            {title: 'Linha', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie', 'Victor','Vinicius']},
            
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => `basicListEntry-${item}`}
          
        />
      </View>
       </View> 
    )
}