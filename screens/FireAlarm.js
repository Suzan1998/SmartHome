import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image ,FlatList, Alert, KeyboardAvoidingView,
    ScrollView , } from 'react-native';
import { Card, FAB, Button } from 'react-native-paper';
//import { item } from 'react-native-paper';

const FireAlarm = ({navigation}, route)=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)


    return(
        <KeyboardAvoidingView behavior="position"  style={styles.root}>
        <View>
        <Card style={styles.mycard}
            onPress={()=>navigation.navigate("PassDoor")}
            >
                <View style={styles.cardview}>
                    <View style={styles.textview}>
                        <Text style={styles.text}>Fire Status</Text>   
                    </View>
                    <Image 
                 style={styles.cardImage}
                source={require('./assets/house.png')}
                
                />
                </View>
            </Card>
        <Card style={styles.mycard}
            onPress={()=>navigation.navigate("PassDoor")}
            >
                <View style={styles.cardview}>
                    <View style={styles.textview}>
                        <Text style={styles.text}>Call Emergency </Text>   
                    </View>
                    <Image 
                 style={styles.cardImage}
                source={require('./assets/fireman.png')}
                
                />
                </View>
            </Card>
            <Card style={styles.StateCard}
            onPress={()=>navigation.navigate("PassDoor")}
            >
                <View style={styles.cardview}>
                    <View style={styles.textview}>
                    </View>
                    <Image 
                 style={{width:80,height:80}}
                source={require('./assets/ok.png')}
                
                />
                </View>
            </Card>
            
            
               
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

    textview:{
        flexDirection:'column',
        
    },


    fab:{
        position: 'absolute',
        margin: 16,
        right: 265,
        bottom: 20,

    },
    mycard:{
        margin:5,
       // padding:5,
       backgroundColor:"white",
       justifyContent:'flex-end',
       alignItems:'flex-end',
       borderBottomWidth:1,
        borderBottomColor: '#197fff'
        
      },
    StateCard:{
        margin:5,
       // padding:5,
       backgroundColor:"white",
       justifyContent:'flex-end',
       alignItems:'flex-end',
       borderBottomWidth:1,
        borderBottomColor: '#197fff'
        
      },
      text:{
          margin:30,
        fontSize:20,
        color: '#ff3c00'

     },
      cardImage: {
        width:100,
        height:100,
        borderRadius:50,
        borderWidth:1,
         borderColor:"#ff3c00"
      },
      cardview:{
        flexDirection:"row",
        padding:6,
        
    },

  });
export default FireAlarm;