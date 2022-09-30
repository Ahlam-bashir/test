import React,{useState,useEffect} from "react"
import {View,StyleSheet,Image,Text,TextInput,TouchableOpacity} from "react-native"
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 
'react-native-confirmation-code-field';
import colors from "../../../Constants/colors";




const VerifyPin=({navigation})=>{
    return(
        <View style={styles.container}>

            <Image
              source={require("../../../assets/images/device.png")} 
              style={styles.image}
            />
            <View>
                <Text style={styles.heading}>Verify Your Number</Text>
                <Text style={styles.body}>Request you to add the one time password you have received on +973 777899374</Text>
                <Text style={{...styles.body,fontWeight:"600",color:"#1778F2",textDecorationLine:"underline",marginTop:16}}>Edit Phone Number</Text>
                <View style={styles.otpContainer}>
              </View>
              </View>
              </View>
    )
}
export default VerifyPin
const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        padding:20

    },
    image:{
       height:100,
       width:100,
       resizeMode:"contain" ,
       marginTop:93,

    },
    heading:{
        fontSize:32,
        fontWeight:"bold",
        marginTop:30,
        textAlign:"center",
        color:"#24637F",
        lineHeight:93




    },
    body:{
        fontSize:14,
        color:"#6B6B6B",
        lineHeight:16

    },
    otpBoxesContainer: {
        flexDirection: 'row'
    },
    otpBox: {
        padding: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "lightGrey",
        height: 45,
        width: 45,
        textAlign: 'center'
    },
    cellRoot: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
     },
     cellText: {
        color: '#000',
        fontSize: 28,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
    },
    
    button: {
        marginTop: 20
    },
    resendCode: {
        color: "blue",
        marginStart: 20,
        marginTop: 40,
    },
    resendCodeText: {
        marginStart: 20,
        marginTop: 40,
    },
    resendCodeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    otpContainer:{
        marginTop:38,
        marginBottom:23

    }

})