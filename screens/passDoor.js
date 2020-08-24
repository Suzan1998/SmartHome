import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image ,FlatList, Alert, KeyboardAvoidingView,
    ScrollView , } from 'react-native';
import { Card, FAB, Button } from 'react-native-paper';
import PinView from 'styled-react-native-pin-view';
import * as firebase from 'firebase';

const PassDoor = ({navigation}, route)=>{
 // var firebase = require("firebase");

   const firebaseConfig = {
        apiKey: "AIzaSyDrxKgonBdLFWIeNSXDvFfPPynQXP6AiJo",
        authDomain: "ardu-a361a.firebaseapp.com",
        databaseURL: "https://ardu-a361a.firebaseio.com",
        projectId: "ardu-a361a",
        storageBucket: "ardu-a361a.appspot.com",
        messagingSenderId: "1096024222021",
        appId: "1:1096024222021:web:ad47c9d5e28eee46bc762c",
        measurementId: "G-B4C2GHM5BC"
      };

   let state ={
      pass: 1,
    };
    const  readPassword=()=> {
        firebase.database().ref().child('password').on('value', function (snapshot) {
         let password=snapshot.val();
            console.log(password);           
           
              state.pass=password;
             
        });
    }

    let comparePass=(val)=>
    {
      
      if (val==state.pass){
        console.log("Yesssss");
      }
      else
      {
        
        console.log(val);
        console.log("NOOOOOO");
      }

    }
     
    return(
       
        <View>
           <Button style={styles.inputstyle}  onPress={()=>readPassword()} >
         
          MY PASS
          </Button>
        <Card style={styles.mycard} >
                
                <Image 
                 style={styles.cardImage}
                source={require('./assets/pass.jpg')}
                />
 
            </Card>
            <View style={styles.pinStyle}>
            <PinView  
            onComplete={(val)=>comparePass(val)}
            pinLength={5}
            buttonBgColor={'#aeb0b5'}
            buttonTextColor={'white'}
            inputBgColor={'#197fff'}
            inputBgOpacity={.5}
            />
            </View>
            
            </View>
           
            )
    
}
const theme ={
    colors:{
        primary:"#197fff",   
    }

}
const styles = StyleSheet.create({
    mycard:{
       padding:1,
       backgroundColor:"white",
       justifyContent:'center',
       alignItems:'center',
       borderBottomWidth:1,
        borderBottomColor: '#197fff'
        
      },
      text:{
        alignSelf:'center',
        marginRight:10,
        fontSize:20,
        color: '#ff3c00'

     },
      cardImage: {
       
        width:400,
        height:100,
       
       
      },
      pinStyle:{
   
        
    },
    inputstyle:{
      padding:10, 
      alignSelf:'center', 
      width:180,
  },
  });
export default PassDoor;