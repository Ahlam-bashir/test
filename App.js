import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from './src/Screens/Auth/LoginScreen/FirstScreen';
import OtpScreen from './src/Screens/Auth/OtpScreen';
import VerifyPin from './src/Screens/Auth/VerifyPin/VerifyPin';
import mainNavigator from './src/navigation/mainNavigator';

const Stack = createStackNavigator();
const App = () => {
  const [flag, setFlag] = useState(false);
  const [currenStep, setCurrentStep] = useState(0);
  const steps = [
    {
      id: 1,
      title: 'Task Started',
      isSelected: false,
    },
    {
      id: 2,
      title: 'Task   Doing',
      isSelected: false,
    },
    {
      id: 3,
      title: 'Task Completed',
      isSelected: false,
    },
  ];
  const stepperComponent = ({item}) => {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 60,
              width: 60,
              borderRadius: 100,
              backgroundColor: currenStep !== item.id ? 'gray' : 'green',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 115,
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>{item.id}</Text>
          </View>
          <Text style={{paddingHorizontal: 10}}>{item.title}</Text>
        </View>
        <View
          style={{
            height: 100,
            width: 1,
            backgroundColor: 'gray',
            alignSelf: 'center',
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={steps}
        keyExtractor={(item, index) => item.id}
        renderItem={stepperComponent}
        contentContainerStyle={{marginTop: 20}}
      />
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setCurrentStep(prevState =>
              prevState < steps.length ? prevState + 1 : prevState,
            )
          }>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setCurrentStep(prevState =>
              prevState > 1 ? prevState - 1 : prevState,
            )
          }>
          <Text style={styles.text}>Previous</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});
