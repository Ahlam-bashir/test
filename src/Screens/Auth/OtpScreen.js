import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{useState,useEffect} from "react"
import {View,StyleSheet,Image,Text,TextInput,TouchableOpacity} from "react-native"
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 
'react-native-confirmation-code-field';
import colors from "../../Constants/colors";

const CELL_COUNT = 6;
const RESEND_OTP_TIME_LIMIT = 30;

const OtpScreen =({navigation})=>{
    let resendOtpTimerInterval=0
    const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(
        RESEND_OTP_TIME_LIMIT,
    );
   
const [value, setValue] = useState('');
const [data,setData]=useState("")
const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
});
//start timer
const startResendOtpTimer = () => {
    if (resendOtpTimerInterval) {
        clearInterval(resendOtpTimerInterval);
    }
    resendOtpTimerInterval = setInterval(() => {
        if (resendButtonDisabledTime <= 0) {
            clearInterval(resendOtpTimerInterval);
        } else {
            setResendButtonDisabledTime(resendButtonDisabledTime - 1);
        }
    }, 1000);
};
//on resend otp timer
const onResendOtpButtonPress = () => {
    //clear input field
    setValue('')
    setResendButtonDisabledTime(RESEND_OTP_TIME_LIMIT);
    startResendOtpTimer();

    // resend OTP Api call
    // todo
    console.log('todo: Resend OTP');
};
useEffect(() => {
    startResendOtpTimer();
    return () => {
        if (resendOtpTimerInterval) {
            clearInterval(resendOtpTimerInterval);
        }
    };
}, [resendButtonDisabledTime]);
const verifyOtp=async(value)=>{
    setValue(value)
   if(value.length==6){
      await AsyncStorage.getItem("data").then(response=>JSON.parse(response)).then(responseJson=>{
            if(responseJson!==null){
                let key=responseJson.custMasterAuthorization.activationKey
                console.log(key)

                fetch(`http://services.juno.clinic/customer/account/check/${key}/246278/registration`,
                {
                    method:"GET",

                }
        
                )
            
                .then(async response => response.json()).then(responseJson=>{
                    navigation.navigate("VerifyPin")
                  
                    
                   if(responseJson.statusCode==200){
                       console.log(responseJson)
                      
            
            
                   }else if(responseJson.statusCode==412){
                       alert(responseJson.message)
                     
            
                   }
                })
                .catch(error => {
                
                    console.error('There was an error!', error);
                });
            

            }
       })
   
   }

}


    return(
        <View style={styles.container}>

            <Image
              source={require("../../assets/images/device.png")} 
              style={styles.image}
            />
            <View>
                <Text style={styles.heading}>Verify Your Number</Text>
                <Text style={styles.body}>Request you to add the one time password you have received on +973 777899374</Text>
                <Text style={{...styles.body,fontWeight:"600",color:"#1778F2",textDecorationLine:"underline",marginTop:16}}>Edit Phone Number</Text>
                <View style={styles.otpContainer}>
                <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={(input)=>verifyOtp(input)}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
                <View
                    onLayout={getCellOnLayoutHandler(index)}
                    key={index}
                    style={[styles.cellRoot, isFocused && styles.focusCell]}>
                    <Text style={styles.cellText}>
                        {symbol || (isFocused ? <Cursor /> : null)}
                    </Text>
                </View>
            )}
        />
        </View>
        {resendButtonDisabledTime > 0 ? (
            <Text  style={styles.body}>Resend OTP {resendButtonDisabledTime} sec</Text>
        ) : (
                <TouchableOpacity
                    onPress={onResendOtpButtonPress}>
                    <View style={styles.resendCodeContainer}>
                    <Text  style={{...styles.body.color,color:colors.secondary}}>Resend OTP {resendButtonDisabledTime} sec</Text>
                     
                       
                    </View>
                </TouchableOpacity >
            )
        }
        
       
            </View>




        </View>
    )

}
export default OtpScreen
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