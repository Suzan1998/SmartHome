import React, {useState} from 'react';
import { StyleSheet, Text, View,Image , Modal, ImagePickerIOS, Alert,KeyboardAvoidingView,TouchableHighlight, } from 'react-native';
import {Card, TextInput,Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';

const Lights = ({navigation, route}) =>{



     state = {
        status: '',
        status2: '',
        doorstatus:'',
      };
    const  readvalue = ()=>{
           let id="0"
           let id2="1"
          let status
          let status2
          try
           {
              firebase.database().ref().child('led1').on("value", function (snapshot) {
                  snapshot.forEach(function (item) {
                      status=item.val()
                     // console.log("status") 
                      //console.log(status)  
                   //  console.log("sdlfjsdhfh",status)
                   if(status == 1)
                   {
                this.setState({
                 status: "ON"
                })
              }
              else {
                this.setState({
                  status: "OFF"
                 })
              }
      
               }.bind(this))
            }.bind(this)) 
          }
          catch(error){
            console.log(error)
          }
      };
      
     const readvalue2 = ()=>{
        let id="0"
        let id2="1"
       let status
       let status2
       try
        {
           firebase.database().ref().child('led2').on("value", function (snapshot) {
               snapshot.forEach(function (item) {
                   status=item.val()
                if(status == 1)
                {
             this.setState({
              status2: "ON"
             })
           }
           else {
             this.setState({
               status2: "OFF"
              })
           }
      
            }.bind(this))
         }.bind(this)) 
       }
       catch(error){
         console.log(error)
       }
      };
      
     const readvalueofdoor = ()=> {
        let id="0"
        let id2="1"
       let status
       let status2
       try
        {
           firebase.database().ref().child('door').on("value", function (snapshot) {
               snapshot.forEach(function (item) {
                   status=item.val()
                  // console.log("status") 
                   //console.log(status)  
                //  console.log("sdlfjsdhfh",status)
                if(status == 1)
                {
             this.setState({
              doorstatus: "opened"
             })
           }
           else {
             this.setState({
               doorstatus: "closed"
              })
           }
      
            }.bind(this))
         }.bind(this)) 
       }
       catch(error){
         console.log(error)
       }
      };
      
   const   changevaluetoOFF = ()=>{
        let id="0";
        //let id2="1";
        let status
        try
           {
           firebase.database().ref('led1/').set(
            {status:id})
            this.setState({status: id})
          }
        catch(error){
          console.log(error)
        }
      };
      
    const  changevaluetoON = ()=> {
        let id="1";
        //let id2="1";
        let status
        try
           {
           firebase.database().ref('led1/').set(
            {status:id})
            this.setState({status: id})
          }
        catch(error){
          console.log(error)
        }
      };
      
      const  changevaluetoOFFdoor = ()=>{
        let id="0";
        //let id2="1";
        let status
        try
           {
           firebase.database().ref('door/').set(
            {status:id})
            this.setState({status: id})
          }
        catch(error){
          console.log(error)
        }
      };
      
      const changevaluetoONdoor = ()=>{
        let id="1";
        //let id2="1";
        let status
        try
           {
           firebase.database().ref('door/').set(
            {status:id})
            this.setState({status: id})
          }
        catch(error){
          console.log(error)
        }
      };
      
      const changevaluetoOFFled2 = ()=>{
        let id="0";
        //let id2="1";
        let status
        try
           {
           firebase.database().ref('led2/').set(
            {status:id})
            this.setState({status: id})
          }
        catch(error){
          console.log(error)
        }
      };
      
      const changevaluetoONled2 = ()=>{
        let id="1";
        //let id2="1";
        let status
        try
           {
           firebase.database().ref('led2/').set(
            {status:id})
            this.setState({status: id})
          }
        catch(error){
          console.log(error)
        }
      };
      
      const componentWillMount = ()=>{
            console.log(state.status)
            try
            {
            const firebaseConfig = {
              apiKey: "AIzaSyCxZT7zyJ244tgEKMggTVbETCSg1hqUzv8",
              authDomain: "ardu-a361a.firebaseapp.com",
              databaseURL: "https://ardu-a361a.firebaseio.com",
              projectId: "ardu-a361a",
              storageBucket: "ardu-a361a.appspot.com",
              messagingSenderId: "1096024222021",
              appId: "1:1096024222021:web:ad47c9d5e28eee46bc762c",
              measurementId: "G-B4C2GHM5BC"
            };
              //if (!firebase.app.length) {
              firebase.initializeApp(firebaseConfig);
              //console.log(firebaseConfig)
              //}
            }
            catch(error){
              console.log(error)
            } 
            console.disableYellowBox=true
            readvalue()  
            readvalue2() 
            readvalueofdoor()
           // this.changevalue()
        }

        
      
        return(
            <View>
          <View style={styles.common}>
          
          <TouchableHighlight onPress={changevaluetoON()} >
                <Image style={styles.buttonImage}
                        source={require('./assets/on2.png')}/>
          
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={changevaluetoOFF()} >
             <Image style={styles.buttonImage}
                    source={require('./assets/off2.png')}/>  
         </TouchableHighlight>
             <Text style={styles.textStyle}>Kitchen Light is {state.status}</Text>
          </View>
                   <View style={styles.common}>
             <Text>led2 is {state.status2}</Text>
             <TouchableHighlight onPress={changevaluetoONled2()} >
                <Image style={styles.buttonImage}
                        source={require('./assets/on2.png')}/>
          
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={changevaluetoOFFled2()} >
             <Image style={styles.buttonImage}
                    source={require('./assets/off2.png')}/>  
         </TouchableHighlight>
           
          </View>

          <View style={styles.common}>

             <Text>dooor is {state.doorstatus}</Text>
             <TouchableHighlight onPress={changevaluetoONdoor()} >
                <Image style={styles.buttonImage}
                        source={require('./assets/on2.png')}/>
          
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={changevaluetoOFFdoor()} >
             <Image style={styles.buttonImage}
                    source={require('./assets/off2.png')}/>  
         </TouchableHighlight>
           
          </View>



          </View>
            )
}
const theme ={
    colors:{
        primary:"#ff3c00",   
    }

}
const styles = StyleSheet.create({
    common:
    {
      alignSelf:'center',
      marginTop:10,
      flexDirection: 'row',
      borderRadius: 23,
      borderColor: '#00b5ec',
      borderWidth: 2,
      backgroundColor: "white",
      height: 150,
      width: 345,
      alignItems: 'center',
      
    },
    buttonImage:
    {
      backgroundColor: "white",
      height:70,
      width: 70,
      margin:10
    },
    textStyle:
    {
     
    },
    imageStyle:{
      backgroundColor: "white",
      height:147,
      width: 150,
      borderRadius:23,
      
    }



    
})

export default Lights;