import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image ,FlatList, Alert, KeyboardAvoidingView,
    ScrollView , } from 'react-native';
import { Card, FAB, Button } from 'react-native-paper';

//import { item } from 'react-native-paper';

const Doors = ({navigation}, route)=>{


    return(
        <KeyboardAvoidingView behavior="position"  style={styles.root}>
        <View>
        <Card style={styles.mycard}
            onPress={()=>navigation.navigate("PassDoor")}
            >
                <View style={styles.cardview}>
                    <View style={styles.textview}>
                        <Text style={styles.text}>Main Door control</Text>
                    
                    </View>
                <Image 
                 style={styles.cardImage}
                source={require('./assets/door.png')}
                
                />
                </View>
            </Card>
            <Card style={styles.mycard}
            onPress={()=>navigation.navigate("Carage")}
            >
                <View style={styles.cardview}>
                    <View style={styles.textview}>
                        <Text style={styles.text}> Carage Door control</Text>
                    
                    </View>
                <Image 
                 style={styles.cardImage}
                source={require('./assets/carage.png')}
                
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

    cardview:{
        flexDirection:"row",
        
    },
    textview:{
        flexDirection:'column',
        
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 1
        ,
      },
    text:{
       fontSize:18,
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
    logo: {
        
        height: 180,
        width: 180,
      },
      name: {
        height: 150,
        width: 330,
      },
    inputfont: {

    },
    inputstyle:{
        padding:10,  
    },
  });
export default Doors;