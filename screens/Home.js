import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,Image ,FlatList, Alert, KeyboardAvoidingView,
    ScrollView , } from 'react-native';
import { Card, FAB, Button } from 'react-native-paper';
//import { item } from 'react-native-paper';

const Home = ({navigation}, route)=>{
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)


    return(
        <View style={{flex:1}}>
          <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
     <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
     <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo.png')}/>
        <Image style={styles.name} source={require('./assets/name.png')}/>
        </View>
    <View style={styles.inputContainer}>
     <Text>{'\n'}</Text>
     <Button style={styles.inputstyle} 
           
              theme={theme}
              mode="contained"
              onPress={()=>navigation.navigate("MainScreen")}>
                Lets Start
            </Button>


  
    </View>
    
    
    </KeyboardAvoidingView>
    </ScrollView>
  </View>
           
            <FAB onPress={()=>navigation.navigate("CreateEmp")}
              style={styles.fab}
              large
              icon="plus"
              theme={{colors:{accent:'#272429'}}}
            />
        </View>
    )
}
const theme ={
    colors:{
        primary:"#197fff",   
    }

}
const styles = StyleSheet.create({
    mycard:{
      margin:5,
     // padding:5,
     backgroundColor:'#c1cccc',
     justifyContent:'flex-end',
     alignItems:'flex-end',
      
    },
    cardview:{
        flexDirection:"row",
        padding:6,
    },
    textview:{
        flexDirection:'column',
        margin:10,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 10
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
export default Home;