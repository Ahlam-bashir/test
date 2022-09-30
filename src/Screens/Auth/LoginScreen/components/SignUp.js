
import React,{useState} from "react"
import {View,Text,StyleSheet,TouchableOpacity,Image,KeyboardAvoidingView,Platform} from "react-native"
import {TextInput} from "react-native-paper"
import  AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp=(props)=>{
    const {navigation}=props
  
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")

const signup=()=>{
    if(name=="" || mobile==""){
        alert("all fields are mandatory")
        return
    }
    const data={
        
            "name": name,
            "country": "India",
            "mobile": mobile
       

    }
    fetch('http://services.juno.clinic/customer/account', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then((response) => response.json())
            .then(async(responseData) => {
                console.log("RESULTS HERE:", responseData)
                if(responseData.statusCode==200){
                 AsyncStorage.setItem("data",JSON.stringify(responseData.data))
                    alert(responseData.message)
                    navigation.navigate("OtpScreen")


                }else if(responseData.statusCode==412){
                    alert(responseData.message)


                }

          
       
      })
      .catch((error) =>{
        console.error(error);
      }) 
    
}

    return(
        <View style={styles.SignUpContainer}>
              <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : null}
         keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0} >
           
          
            <TextInput
            mode="outlined"
            outlineColor="#000000"
            activeOutlineColor="#000000"       
            label="Enter your name"
           value={name}
         

           style={{height:50,borderRadius:10,backgroundColor:"white"}}
           onChangeText={text => setName(text)}/>
           <View style={styles.container}>
               <View style={styles.countrycontainer}>
                   <Text style={{...styles.buttonText,fontWeight:"400",color:"#000000"}}>+91</Text>
               </View>
               <TextInput
            mode="outlined"
            outlineColor="#000000"
            activeOutlineColor="#000000"       
            label="Enter phone Number"
           value={mobile}
           keyboardType="number-pad"
           maxLength={10}
           style={{height:50,borderRadius:10,backgroundColor:"white",width:234}}
           onChangeText={text => setMobile(text)}/>

             

           </View>
           <TouchableOpacity style={styles.button} onPress={signup}>
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
export default SignUp
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
        marginTop:18

        

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