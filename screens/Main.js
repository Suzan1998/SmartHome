import React from 'react';
import { StyleSheet, Text, View,Image ,KeyboardAvoidingView,ScrollView } from 'react-native';
import {Card,} from 'react-native-paper';


const Main = ({navigation}) =>{
        return(
            <ScrollView  style={styles.root} >
            <View>
            <Card style={styles.titleCard} onPress={()=>navigation.navigate("Lights")}>
           <Text style={styles.text}>Home Lights</Text>
           </Card>
            <Card style={styles.mycard}
                onPress={()=>navigation.navigate("Lights")}
                >
                    <View style={styles.cardview}>
                    <Image 
                     style={styles.cardImage}
                    source={require('./assets/homelights.png')}
                    
                    />
                    </View>
                </Card>
                <Card style={styles.titleCard} onPress={()=>navigation.navigate("Safety")}>
           <Text style={styles.text}>Home Safety</Text>
           </Card>
                <Card style={styles.mycard}
                onPress={()=>navigation.navigate("Safety")}
                >
                    <View style={styles.cardview}>
                      
                    <Image 
                     style={styles.cardImage}
                    source={require('./assets/safehome.png')}
                    
                    />
                    </View>
                </Card>

                <Card style={styles.titleCard} onPress={()=>navigation.navigate("Devices")}>
           <Text style={styles.text}>Home Devices</Text>
           </Card>
                <Card style={styles.mycard}
                onPress={()=>navigation.navigate("Devices")}
                >
                    <View style={styles.cardview}>
                    <Image 
                    style={styles.cardImage}
                    source={require('./assets/devices.png')}
                    
                    />
                    </View>
                </Card>
            </View>
            </ScrollView>
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
 

    mycard:{
        margin:5,
       borderColor:"#197fff",
       justifyContent:'center',
       alignItems:'center',
       borderBottomWidth:1,
       backgroundColor: 'white',
       width:360,
        height:170,
        alignSelf:'center',
        borderWidth:2,
    
        
      },
      cardImage: {
        width:200,
        height:160,
        alignSelf:'center',
        borderWidth:2,
        borderColor:'white'
     
      },
      cardview:{
        flexDirection:"row",
        padding:6,
        
    },
    text:{
        fontSize:26,
        color: '#ff3c00'

     },
     textview:{
        flexDirection:'column',
        margin:30,
       
    },
    
    titleCard:{
        margin:5,
        width:360,
       height:30,
       borderWidth:2,
       borderColor:'#ffffff',
       flexDirection:"row",
       backgroundColor:'#197fff',
       justifyContent:'center',
       alignItems:'center',
       alignSelf:'center'
       
        
      },
      text:{
        fontSize:15,
        alignSelf:'center',
        color:'#ffffff'
       },
    


    
})

export default Main;