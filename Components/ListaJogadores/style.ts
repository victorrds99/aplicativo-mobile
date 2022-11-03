import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    
        container: {
         flex: 1,
         paddingTop: 22
        },
        sectionHeader: {
          paddingTop: 2,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 2,
          fontSize: 14,
          fontWeight: 'bold',
          backgroundColor: 'rgba(247,247,247,1.0)',
        },
        item: {
          padding: 10,
          fontSize: 18,
          height: 44,
          alignItems: "center",
          backgroundColor: "#DDDDDD"
   
        },
        contentList:{
          paddingLeft:32,
          paddingRight:64,
          
        },
        title: {
          textAlign: 'center',
          marginVertical: 8,
        },
        fixToText: {
          flexDirection: 'row',
          justifyContent: 'space-between',
        },

      
  });