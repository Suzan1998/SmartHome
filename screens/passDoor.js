import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image ,FlatList, Alert, KeyboardAvoidingView,
    ScrollView , } from 'react-native';
import { Card, FAB, Button } from 'react-native-paper';
import PinView from 'styled-react-native-pin-view';

const PassDoor = ({navigation}, route)=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)


    return(
        <KeyboardAvoidingView behavior="position"  style={styles.root}>
        <View>
        <Card style={styles.mycard} >
                
                <Image 
                 style={styles.cardImage}
                source={require('./assets/pass.jpg')}
                />
 
            </Card>
             <PinView
            onComplete={(val, clear)=>{alert(val)}}
            pinLength={5}
            />
            </View>
           
            </KeyboardAvoidingView>
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
        height:140,
       
       
      },
      cardview:{
        flexDirection:'row',
        padding:10,
        
    },
  });
export default PassDoor;