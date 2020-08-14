import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image ,FlatList, Alert, KeyboardAvoidingView,
    ScrollView , Modal} from 'react-native';
import { Card, FAB, Button } from 'react-native-paper';
//import { item } from 'react-native-paper';

const Carage = ({navigation}, route)=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)


    return(
        <KeyboardAvoidingView behavior="position"  style={styles.root}>
        <View style={styles.viewStyle}>
               
        <Card style={styles.mycard}>
        
                <View style={styles.cardview}>
                    <View style={styles.textview}>
                        <Text style={styles.text}>Control Your Garage:</Text>
                    
                    </View>
                </View>
            </Card>
                <Image 
                 style={{width:350, height:370,alignSelf:'center', marginTop:20}}
                source={require('./assets/open.png')}
                
                />
                    <View style={styles.modalButtonView}>
                        <Button style={styles.Button} 
                         theme={theme} 
                        mode="contained" 
                        >
                        Open Garage
                        </Button>

                        <Button  style={styles.Button}
                        mode="contained" 
                        theme={theme}
                        >
                        Close Garage
                        </Button>
                    </View>
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

    view2:{
        marginTop:340
    }
    ,    
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
   
    fab:{
        position: 'absolute',
        margin: 16,
        right: 265,
        bottom: 20,

    },
    mycard:{
       backgroundColor:"white",
       justifyContent:'flex-end',
       alignItems:'flex-end',
       borderBottomWidth:1,
        borderBottomColor: '#197fff'
        
      },
      text:{
          margin:10,
        fontSize:20,
        color: '#197fff'

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
    modalButtonView:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around'
   
        
       },
       Button:{
           margin:5,
           width:160,
           height:70,
           justifyContent:'space-around',
           bottom:2,
           
       },
   
       ModalView:{
           zIndex:-1,
           position: 'absolute',
           bottom:4,
           //left:5,
           alignSelf:'center',
           backgroundColor:"#bdbdbd"
       }
  });
export default Carage;