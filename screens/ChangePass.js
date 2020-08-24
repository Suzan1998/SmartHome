import React, {useState} from 'react';
import { StyleSheet, View, Modal, ImagePickerIOS, Alert,KeyboardAvoidingView } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase';


const CreateEmployee = ({navigation, route}) =>{

        
        const [shift, setShift] = useState(false)
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
    
        
        return(
            <KeyboardAvoidingView behavior="position"  style={styles.root} enabled={shift}>
            <View>
                 <TextInput
                    secureTextEntry={true}
                    style={styles.inputstyle}
                    label='Old Password'
                    theme={theme}
                    onFocus={()=>setShift(false)}
                    mode='outlined'
                    
                 />
                 <TextInput
                    secureTextEntry={true}
                    style={styles.inputstyle}
                    label='New Password'
                    theme={theme}
                    onFocus={()=>setShift(false)}
                    mode='outlined'
                    
                 />

                 <TextInput
                    secureTextEntry={true}
                    style={styles.inputstyle}
                    label='Repeate Password'
                    theme={theme}
                    onFocus={()=>setShift(false)}
                    mode='outlined'
                    
                 />
           
         
             <Button style={styles.buttonStyle} 
              icon="check" 
              theme={theme}
              mode="contained"
              >
               Edit Password
            </Button>
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
    root:{
        flex:1,
    },
    inputstyle:{
        margin:5,  
    },
    buttonStyle:{
        margin:5,  
        padding:5
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
    }



    
})

export default CreateEmployee;