import React from 'react';
import { Card, FAB, Button } from 'react-native-paper';
import {
  StyleSheet, Platform, Image, Text, View, TouchableOpacity, TabView,
  TextInput,
  ScrollView,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
  CheckBox,
  Switch, KeyboardAvoidingView,
} from 'react-native'
import * as firebase from 'firebase';



// _handleUserPreference = () =>
//     this.setState({ ...this.state, status: !this.state.status, update_user_preferences: false  });
//const picCloseGarage = require('./assets/close.png');
//const picOpenGarage = require('./assets/open.png');



export default class GaraegDoor extends React.Component {
    
  constructor(){

    super();

    this.state={

      imageURL : 'https://cdn1.vectorstock.com/i/thumb-large/12/30/garage-isometric-icon-isolated-on-color-vector-20151230.jpg'
    }

  }
  Load_Open_Image=()=>{

    this.setState({

      imageURL : 'https://www.pngitem.com/pimgs/m/143-1436644_garage-clipart-free-download-hd-png-download.png'

    })
  }
  Load_Close_Image=()=>{

    this.setState({

      imageURL : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuIw-TZOShKqMRjuatu61mtu0nSrm_CrPL8A&usqp=CAU.jpg'

    })
  }
  
    
  state = {

  Garagedoorstatus:'',

};

readvalueofdoor() {
 let status
 
 try
  {
     firebase.database().ref().child('door').on("value", function (snapshot) {
         snapshot.forEach(function (item) {
             status=item.val()
          if(status == 1)
          {
        
       this.setState({
        Garagedoorstatus: "opened"
       })
     }
     else {
       this.setState({
         Garagedoorstatus: "closed"
        })
     }

      }.bind(this))
   }.bind(this)) 
 }
 catch(error){
   console.log(error)
 }
};



changevaluetoOFFdoor() {
  let id="0";
  try
     {
     firebase.database().ref('door1/').set(
      {status:id})
      this.setState({status: id})
     
    }
  catch(error){
    console.log(error)
  }
};

changevaluetoONdoor() {
  let id="1";


  try
     {
     firebase.database().ref('door1/').set(
      {status:id})
      this.setState({status: id})
    }
  catch(error){
    console.log(error)
  }
};




    componentWillMount() {
      console.log(this.state.status)
      try
      {
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
        //if (!firebase.app.length) {
        firebase.initializeApp(firebaseConfig);
        //console.log(firebaseConfig)
        //}
      }
      catch(error){
        console.log(error)
      } 
      console.disableYellowBox=true
     
      
      this.readvalueofdoor()
     // this.changevalue()
  }

  

    render() {
        
        let GarageImg =<Image 
        style={{width:350, height:370,alignSelf:'center', marginTop:20}}
        source = {{ uri: this.state.imageURL }}
       
       />

       
     console.log("DGDFG",this.state.status)
        return (
           
            <View style={styles.viewStyle}>
                    
            <Card style={styles.mycard}>
            
                    <View style={styles.cardview}>
                        <View style={styles.textview}>
                            <Text style={styles.text}>Control Your Garage:</Text>
                            { GarageImg }
                        </View>
                    </View>
                    
                </Card>
               
                        <View style={styles.modalButtonView}>
                        <TouchableHighlight onPress={this.changevaluetoONdoor, this.Load_Open_Image}>
                <Image style={{
                    backgroundColor: this.props.backgroundColor,
                    height:80,
                    width: 80,
                  }}
                        source={require('./assets/open.png')}/>
          
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={this.changevaluetoOFFdoor, this.Load_Close_Image} >
             <Image style={{
                    backgroundColor: this.props.backgroundColor,
                    height: 80,
                    width:80,
                  }}
                    source={require('./assets/close.png')}/>  
         </TouchableHighlight>
                        </View>
                    </View>
    
              
     
        );
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
  modalButtonView:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-around'

    
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