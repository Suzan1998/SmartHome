import React from 'react';
import { StyleSheet, Text, View,Image ,KeyboardAvoidingView } from 'react-native';
import {Card,} from 'react-native-paper';


const Main = ({navigation}) =>{
        return(
            <KeyboardAvoidingView behavior="position"  style={styles.root} >
            <View>
            <Card style={styles.mycard}
                onPress={()=>navigation.navigate("Lights")}
                >
                    <View style={styles.cardview}>
                        <View style={styles.textview}>
                            <Text style={styles.text}>Home Lights</Text>
                        
                        </View>
                    <Image 
                     style={styles.cardImage}
                    source={require('./assets/homelights.png')}
                    
                    />
                    </View>
                </Card>
                <Card style={styles.mycard}
                onPress={()=>navigation.navigate("Safety")}
                >
                    <View style={styles.cardview}>
                        <View style={styles.textview}>
                            <Text style={styles.text}>Home Safety</Text>
                        
                        </View>
                    <Image 
                     style={styles.cardImage}
                    source={require('./assets/safehome.png')}
                    
                    />
                    </View>
                </Card>

                   
                <Card style={styles.mycard}
                onPress={()=>navigation.navigate("Devices")}
                >
                    <View style={styles.cardview}>
                        <View style={styles.textview}>
                            <Text style={styles.text}>Home Devices</Text>
                        
                        </View>
                    <Image 
                    style={styles.cardImage}
                    source={require('./assets/devices.png')}
                    
                    />
                    </View>
                </Card>
            </View>
            </KeyboardAvoidingView>
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

       backgroundColor:"white",
       justifyContent:'flex-end',
       alignItems:'flex-end',
       borderBottomWidth:1,
        borderBottomColor: '#197fff'
        
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
    text:{
        fontSize:26,
        color: '#ff3c00'

     },
     textview:{
        flexDirection:'column',
        margin:30,
       
    },



    
})

export default Main;