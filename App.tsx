
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Checkin } from './Components/Checkin/index';
import { Home } from './Components/Home/index';
import { Login } from './Components/Login/index';
const {Navigator,Screen} = createBottomTabNavigator();
export default function App() {

  return (
    
    <NavigationContainer >
      <Navigator >
      <Screen
        
          name="Login"
          component={Login}
          options={{  headerShown: false, tabBarStyle:styles.scren }} 
        />
  
      <Screen
          name="Home"
          component={Home}
          options={{ headerShown: false , tabBarStyle:styles.scren }}
        />
        <Screen
        
          name="Checkin"
          component={Checkin}
          options={{  headerShown: false, tabBarStyle:styles.scren }} 
        />

      </Navigator>
    </NavigationContainer>
    
  );
}
/*
       
<View style={styles.container} >
      <View><Checkin/></View>
      
      
     
    </View>
*/ 


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scren:{
    backgroundColor:'#000000',
   
  }
});
