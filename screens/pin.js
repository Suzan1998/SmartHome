import React from 'react';
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

export default class Pin extends React.Component {
  
  state = {
  status: '',
  status2: '',
  doorstatus:'',
};
  readvalue() {
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

readvalue2() {
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

readvalueofdoor() {
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

changevaluetoOFF() {
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

changevaluetoON() {
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

changevaluetoOFFdoor() {
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

changevaluetoONdoor() {
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

changevaluetoOFFled2() {
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

changevaluetoONled2() {
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
      this.readvalue()  
      this.readvalue2() 
      this.readvalueofdoor()
     // this.changevalue()
  }

  

    render() {
     console.log("DGDFG",this.state.status)
        return (
          <View>
          <View style={styles.common}>
             <Text>led1 is {this.state.status}</Text>
             <TouchableHighlight onPress={this.changevaluetoON} >
                <Image style={{
                    backgroundColor: this.props.backgroundColor,
                    height:80,
                    width: 80,
                  }}
                        source={require('./assets/on2.png')}/>
          
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={this.changevaluetoOFF} >
             <Image style={{
                    backgroundColor: this.props.backgroundColor,
                    height: 80,
                    width:80,
                  }}
                    source={require('./assets/off2.png')}/>  
         </TouchableHighlight>
           
          </View>
          <View style={styles.common}>
             <Text>led2 is {this.state.status2}</Text>
             <TouchableHighlight onPress={this.changevaluetoONled2} >
                <Image style={{
                    backgroundColor: this.props.backgroundColor,
                    height:80,
                    width: 80,
                  }}
                        source={require('./assets/on2.png')}/>
          
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={this.changevaluetoOFFled2} >
             <Image style={{
                    backgroundColor: this.props.backgroundColor,
                    height: 80,
                    width:80,
                  }}
                    source={require('./assets/off2.png')}/>  
         </TouchableHighlight>
           
          </View>

          <View style={styles.common}>
             <Text>dooor is {this.state.doorstatus}</Text>
             <TouchableHighlight onPress={this.changevaluetoONdoor} >
                <Image style={{
                    backgroundColor: this.props.backgroundColor,
                    height:80,
                    width: 80,
                  }}
                        source={require('./assets/on2.png')}/>
          
      </TouchableHighlight>
         
        
          <TouchableHighlight onPress={this.changevaluetoOFFdoor} >
             <Image style={{
                    backgroundColor: this.props.backgroundColor,
                    height: 80,
                    width:80,
                  }}
                    source={require('./assets/off2.png')}/>  
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