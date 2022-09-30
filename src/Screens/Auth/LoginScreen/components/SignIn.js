import React,{useState} from "react"
import {View,StyleSheet,Text,TouchableOpacity,Image,Platform,KeyboardAvoidingView} from "react-native"
import { TextInput } from "react-native-paper"
import  AsyncStorage from "@react-native-async-storage/async-storage";


const SignIn=()=>{
    const [mobileNumber,setMobileNumber]=useState("")
    const signin=()=>{
        if(mobileNumber==""){
           alert("please enter mobile number") 

            return
        }
          //7987222585
        fetch('http://services.juno.clinic/customer/mobile?mobileNumber='+mobileNumber,
        
        )

        .then(async response => response.json()).then(responseJson=>{
           if(responseJson.statusCode==200){
               AsyncStorage.setItem("user",JSON.parse(responseJson.data))
               alert("")


           }else if(responseJson.statusCode==404){
               alert(responseJson.message)

           }
        })
        .catch(error => {
        
            console.error('There was an error!', error);
        });
    }
    return(
        <View style={styles.SignUpContainer}>
            <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : null}
         keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
           
               <View style={styles.container}>
               <View style={styles.countrycontainer}>
                   <Text style={{...styles.buttonText,fontWeight:"400",color:"#000000"}}>+91</Text>
               </View>
               <TextInput
            mode="outlined"
            outlineColor="#000000"
            activeOutlineColor="#000000"       
            label="Enter phone Number"
           value={mobileNumber}
           keyboardType="number-pad"
           maxLength={10}

           style={{height:50,borderRadius:10,backgroundColor:"white",width:234}}
           onChangeText={text => setMobileNumber(text)}/>

             

           </View>
           <TouchableOpacity style={styles.button} onPress={signin}>
               <Text style={styles.buttonText}>Get OTP</Text>
           </TouchableOpacity>
          
               <Text style={{textAlign:"center",marginTop:23,paddingTop:2,paddingBottom:2}}>or continue using</Text>
          <View style={styles.socialContainer}>
              <Image source={require("../../../../assets/images/facebook.png")} style={
                  styles.socialIcon
              }/>
                 <Image source={require("../../../../assets/images/google-color.png")} style={
                  styles.socialIcon
              }/>
                 <Image source={require("../../../../assets/images/apple-color.png")} style={
                  styles.socialIcon
              }/>
          </View>

          </KeyboardAvoidingView>
        </View>
    )

}
export default SignIn
const styles=StyleSheet.create({
    SignUpContainer:{
        flex:1,
        padding:29,
       
      


    },
    countrycontainer:{
        height:50,
        width:79,
        borderRadius:10,
        borderColor:"#5CD3E7",
        borderWidth:1,
        marginRight:13,
        alignItems:"center",
        justifyContent:"center"



    },
    container:{
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        marginTop:66

        

    },
    button:{
        height:45,
        width:141,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#5CD3E7",
        alignSelf:"center",
        marginTop:35,
        borderRadius:10
    },
    buttonText:{
        fontWeight:"700",
        color:"#FFFFFF",
        fontSize:18

    },
    socialIcon:{
        height:35,
        width:35,
        resizeMode:"contain"
    },
    socialContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
        marginTop:24
    }

})
