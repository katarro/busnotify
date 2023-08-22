import React from 'react';
import {
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity,
    Image,
  } from "react-native";
  import BackButton from "../goBack/BackButton";

export default function App(){
  return (
    <View> 
        <BackButton/>
        <h1> REGISTER </h1>
    </View>
  );
};

