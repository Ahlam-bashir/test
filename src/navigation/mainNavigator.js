import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from "../Screens/Auth/LoginScreen/FirstScreen";
import OtpScreen from "../Screens/Auth/OtpScreen";
import VerifyPin from "../Screens/Auth/VerifyPin/VerifyPin";

const mainNavigator=()=>{
    return(
        <NavigationContainer>  
        <Stack.Navigator initialRouteName="FirstPage">
          <Stack.Screen
            name="FirsScreen"
            component={FirstScreen}
            options={{
              title: 'First Page', //Set Header Title
              headerShown:false
               
            }}
          />
           <Stack.Screen
            name="OtpScreen"
            component={OtpScreen}
            options={{
              title: 'Otp Screen', //Set Header Title
              headerShown:false
             
            }}
          />
          <Stack.Screen
            name="VerifyPin"
            component={VerifyPin}
            options={{
              title: 'Verify Pin', //Set Header Title
              headerShown:false
             
            }}
          />
          </Stack.Navigator>
          </NavigationContainer>
     

    )

}
export default mainNavigator