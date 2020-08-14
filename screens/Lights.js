import React, {useState} from 'react';
import { StyleSheet, Text, View,Image , Modal, ImagePickerIOS, Alert,KeyboardAvoidingView,TouchableHighlight, } from 'react-native';
import {Card, TextInput,Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


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

        
        const updateDetails = ()=>{
            fetch("http://6d64a3fd.ngrok.io/update",{
                method:"post",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    _id:route.params._id,
                    name,
                    email,
                    salary,
                    picture,
                    phone,
                    position,

                })

            }).then(res=>res.json()).then(employeeupdate=>{
                Alert.alert(`${employeeupdate.name} saved successfully \n \t refresh to see result`)
                navigation.navigate("Home")
            }).catch(err=>{
                Alert.alert("Some error try again")
            })
        }


//to use cloudinary:
        const handleUpload = (image)=>{
            const data = new FormData()
            data.append('file', image)
            data.append('upload_preset','employeeApp')
            data.append("cloud_name","suzan98")
            fetch("https://api.cloudinary.com/v1_1/suzan98/image/upload",{
                method:"post",
                body:data
            }).then(res=>res.json()).
            then(data=>{
                console.log(data)
                setPicture(data.url)
                setModal(false)
            }).catch(err=>{
                Alert.alert("Error while uploading")
            })

        }
        
        return(
            <View>
          <View style={{
            marginTop:10,
            justifyContent: 'space-around',
            flexDirection: 'row',
            borderRadius: 23,
            borderColor: '#00b5ec',
            borderWidth: 2,
            backgroundColor: "white",
            height: 120,
            width: 335,
            paddingLeft: 18,
            alignItems: 'center',
            marginLeft: 10
          }}>
             <Text>led1 is {state.status}</Text>
             <TouchableHighlight onPress={changevaluetoON()} >
                <Image style={{
                    backgroundColor: "white",
                    height:80,
                    width: 80,
                  }}
                        source={require('./assets/on2.png')}/>
          
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={changevaluetoOFF()} >
             <Image style={{
                    backgroundColor:"white",
                    height: 80,
                    width:80,
                  }}
                    source={require('./assets/off2.png')}/>  
         </TouchableHighlight>
           
          </View>
          <View style={{
            marginTop:10,
            justifyContent: 'space-around',
            flexDirection: 'row',
            borderRadius: 23,
            borderColor: '#00b5ec',
            borderWidth: 2,
            backgroundColor: "white",
            height: 120,
            width: 335,
            paddingLeft: 18,
            alignItems: 'center',
            marginLeft: 10
          }}>
             <Text>led2 is {state.status2}</Text>
             <TouchableHighlight onPress={changevaluetoONled2()} >
                <Image style={{
                    backgroundColor: "white",
                    height:80,
                    width: 80,
                  }}
                        source={require('./assets/on2.png')}/>
          
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={changevaluetoOFFled2()} >
             <Image style={{
                    backgroundColor: "white",
                    height: 80,
                    width:80,
                  }}
                    source={require('./assets/off2.png')}/>  
         </TouchableHighlight>
           
          </View>

          <View style={{
            marginTop:10,
            justifyContent: 'space-around',
            flexDirection: 'row',
            borderRadius: 23,
            borderColor: '#00b5ec',
            borderWidth: 2,
            backgroundColor: "white",
            height: 120,
            width: 335,
            paddingLeft: 18,
            alignItems: 'center',
            marginLeft: 10
          }}>

             <Text>dooor is {state.doorstatus}</Text>
             <TouchableHighlight onPress={changevaluetoONdoor()} >
                <Image style={{
                    backgroundColor: "white",
                    height:80,
                    width: 80,
                  }}
                        source={require('./assets/on2.png')}/>
          
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={changevaluetoOFFdoor()} >
             <Image style={{
                    backgroundColor:"white",
                    height: 80,
                    width:80,
                  }}
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
    root:{
        flex:1,
    },
    inputstyle:{
        margin:5,  
        
    
    },
    
    modalButtonView:{
     flexDirection:'row',
     margin:5,
     justifyContent:'space-around'

     
    },
    Button:{
        margin:5,
        width:160,
        height:60,
        justifyContent:'space-around',
        bottom:2,
        
    },

    ModalView:{
        position: 'absolute',
        bottom:4,
        //left:5,
        alignSelf:'center',
        backgroundColor:"#bdbdbd"
    },
    mycard:{
        margin:5,
       // padding:5,
       backgroundColor:'#c1cccc',
       justifyContent:'flex-end',
       alignItems:'flex-end',
        
      },
      cardview:{
        flexDirection:"row",
        padding:6,
    },
    text:{
        fontSize:30,
     },
     textview:{
        flexDirection:'column',
        margin:30,
    },



    
})

export default Lights;