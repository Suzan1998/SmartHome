import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import Home from './screens/Home.js';
import CreateEmployee from './screens/CreateEmployee';
import Main from './screens/Main';
import Lights from './screens/Lights';
import Doors from './screens/Doors';
import Profile from './screens/Profile.js';
import PassDoor from './screens/passDoor.js'
import Carage from './screens/carageDoor.js';
import FireAlarm from './screens/FireAlarm.js';
import Irrigation from './screens/Irrigation.js';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//import {createStore} from 'redux';
//import {Provider} from 'react-redux';


//const store = creatStore();
const Stack = createStackNavigator();


const baroptions={
  title:"Home Screen",
            headerTintColor:"white",
            headerStyle:{
            backgroundColor:"#197fff", 
            }
      } 

 function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}
          options={baroptions}
          />
          <Stack.Screen name="CreateEmp" component={CreateEmployee} 
           options={{...baroptions, title:"Add New Employee"}}
          />
          <Stack.Screen name="MainScreen" component={Main} 
           options={{...baroptions, title:"Main Window"}}
          />
          <Stack.Screen name="Lights" component={Lights} 
           options={{...baroptions, title:"Home Lightning"}}
          />
          <Stack.Screen name="Doors" component={Doors} 
           options={{...baroptions, title:"Home Doors"}}
          />
          <Stack.Screen name="Carage" component={Carage} 
           options={{...baroptions, title:"Carage Door"}}
          />
          <Stack.Screen name="PassDoor" component={PassDoor} 
           options={{...baroptions, title:"Main Door"}}
          />
          <Stack.Screen name="FireAlarm" component={FireAlarm} 
           options={{...baroptions, title:"Fire Detector System"}}
          />
          <Stack.Screen name="Irrigation" component={Irrigation} 
           options={{...baroptions, title:"Irrigation System"}}
          />
          <Stack.Screen name="Profile" component={Profile} 
           options={{...baroptions, title:"Profile"}}
          />
      </Stack.Navigator>
    </View>
  );
}

export default () =>{
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cfcfcf',
  },
});
