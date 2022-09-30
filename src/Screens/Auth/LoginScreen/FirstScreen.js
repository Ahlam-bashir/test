import React ,{useState}from "react";
import {View,Text,SafeAreaView,StyleSheet,Image,TouchableOpacity,ScrollView} from "react-native"
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import colors from "../../../Constants/colors";
const FirstScreen=({navigation})=>{
    const [visible,setVisible]=useState(false)
    return(
        <View style={styles.main}>
        <ScrollView>
        <View style={styles.container}>
        
        <Image source={require("../../../assets/images/logo.png")} style={styles.Image}/>
        <View style={styles.textContainer}>
          <TouchableOpacity style={styles.Container2} onPress={()=>setVisible(true)}>
            <Text style={styles.text}>Sign in</Text>
            {visible?
             <View style={styles.divider}/>:null
            }
           
            
  
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>setVisible(false)}  style={styles.Container2}>
            <Text  style={styles.text}>Sign Up</Text>
            {!visible?
            <View style={styles.divider}/>:null
            }
          
            
  
          </TouchableOpacity>
  
  
        </View>
        </View>
  {visible?<SignIn/>:<SignUp navigation={navigation}/>}
  </ScrollView>
      </View>
  


    )
}
export default FirstScreen
const styles=StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:"white"
     
    },
    Image:{
      height:167,
      width:171,
      resizeMode:"contain",
      marginTop:87
  
    },
    container:{
      height:"50%",
      width:"100%",
      borderRadius:30,
      alignItems:"center",
      justifyContent:"center",
      shadowColor: 'gray',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 4,
      backgroundColor:"white",
      paddingBottom:12,
      elevation:2
     
  
  
    },
    textContainer:{
     
  width: 270,
  height: 39,
 
  
  flexDirection:"row",
  //position:"absolute",
  alignItems:"center",
  justifyContent:"space-between",
  marginTop:85
  
  
  
    },
    text:{
      
  
  height: 30,
  
  fontWeight:"500",
  fontSize:18,
  lineHeight:30,
  color:"black",
  padding:2
  
  
  
  
  
    },
    divider:{
      width:134,
      height:3,
      backgroundColor:colors.primary
    },
    Container2:{
      alignItems:"center",
      justifyContent:"center",
      padding:8
    }
  
    
  
  })
