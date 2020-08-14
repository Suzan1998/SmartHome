import React, {useState} from 'react';
import { StyleSheet, Text, View,Image , Modal, ImagePickerIOS, Alert,KeyboardAvoidingView } from 'react-native';
import {Card, TextInput,Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const Main = ({navigation, route}) =>{

        const getDetails = (type)=>{
            if(route.params){

                switch(type){
                    case "name":
                        return route.params.name
                    case "position":
                        return route.params.position
                    case "phone":
                        return route.params.phone
                    case "email":
                        return route.params.email
                    case "salary":
                        return route.params.salary
                    case "picture":
                        return route.params.picture
                }  
            }
            return ""
        }    
     
        const [name, setName] = useState(getDetails("name"))
        const [position, setPosition] = useState(getDetails("position"))
        const [phone, setPhone] = useState(getDetails("phone"))
        const [email, setEmail] = useState(getDetails("email"))
        const [salary, setSalary] = useState(getDetails("salary"))
        const [picture, setPicture] = useState(getDetails("picture"))
        const [modal, setModal] = useState(false)
        const [shift, setShift] = useState(false)

        const submitData = ()=>{
            fetch("http://6d64a3fd.ngrok.io/send-data",{
                method:"post",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name,
                    email,
                    salary,
                    picture,
                    phone,
                    position,

                })

            }).then(res=>res.json()).then(employeeSaved=>{
                Alert.alert(`${employeeSaved.name} saved successfully`)
                navigation.navigate("Home")
            }).catch(err=>{
                Alert.alert("Some error try again")
            })
        }

        const pickFromGallery = async()=>{
          const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)

          if(granted){
         let data=     await ImagePicker.launchImageLibraryAsync({
                  mediaTypes:ImagePicker.MediaTypeOptions.Images,
                  allowsEditing:true,
                  aspect:[1,1],
                  quality:1
              })
              if(!data.cancelled){
                let newfile2 = {
                uri:data.uri,
                type:`test/${data.uri.split(".")[1]}`,
                name:`test.${data.uri.split(".")[1]}`}
                handleUpload(newfile2)
            }

          }else{
                Alert.alert("you need to give this application a permession to gallery")
          }
        }


        const pickFromCamera = async()=>{
          const {granted} = await Permissions.askAsync(Permissions.CAMERA)

          if(granted){
         let data=     await ImagePicker.launchCameraAsync({
                  mediaTypes:ImagePicker.MediaTypeOptions.Images,
                  allowsEditing:true,
                  aspect:[1,1],
                  quality:1
              })
              if(!data.cancelled){
                  let newfile = {
                  uri:data.uri,
                  type:`test/${data.uri.split(".")[1]}`,
                  name:`test.${data.uri.split(".")[1]}`}
                  handleUpload(newfile)
              }

          }else{
                Alert.alert("you need to give this application a permession to camera")
          }
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
            <KeyboardAvoidingView behavior="position"  style={styles.root} enabled={shift}>
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
                    source={require('./assets/lights.jpg')}
                    
                    />
                    </View>
                </Card>
                <Card style={styles.mycard}
                onPress={()=>navigation.navigate("Doors")}
                >
                    <View style={styles.cardview}>
                        <View style={styles.textview}>
                            <Text style={styles.text}>Security Sys</Text>
                        
                        </View>
                    <Image 
                     style={styles.cardImage}
                    source={require('./assets/safe.png')}
                    
                    />
                    </View>
                </Card>
                   
                <Card style={styles.mycard}
                onPress={()=>navigation.navigate("FireAlarm")}
                >
                    <View style={styles.cardview}>
                        <View style={styles.textview}>
                            <Text style={styles.text}>Fire Detector</Text>
                        
                        </View>
                    <Image 
                     style={styles.cardImage}
                    source={require('./assets/fire.png')}
                    
                    />
                    </View>
                </Card>
                   
                <Card style={styles.mycard}
                onPress={()=>navigation.navigate("Irrigation")}
                >
                    <View style={styles.cardview}>
                        <View style={styles.textview}>
                            <Text style={styles.text}>Irrigation Sys</Text>
                        
                        </View>
                    <Image 
                    style={styles.cardImage}
                    source={require('./assets/irrigation.png')}
                    
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