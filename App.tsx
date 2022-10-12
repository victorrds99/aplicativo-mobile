
import { StyleSheet, Text, View } from 'react-native';

import { Checkin } from './Components/Checkin/index';

export default function App() {

  return (
    <View style={styles.container} >
      <View><Checkin/></View>
      
      
     
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
