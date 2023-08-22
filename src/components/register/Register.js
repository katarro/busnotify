import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import BackButton from "../goBack/BackButton";
import { getAuth, reload } from "firebase/auth";
import app from '../firebase/firebaseConfig';
import logo from "../../../assets/logoCompleto.png";
import styles from '../login/styles';


export default function Register() {
  const [email, setEmail] = useState(''); // Estado para el campo de email
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const checkConnection = async () => {
      if (app) {
        try {
          //await reload(user);
          console.log("Conectado a Firebase Auth");
        } catch (error) {
          console.log("No se pudo conectar a Firebase Auth:", error);
        }
      }
    };

    checkConnection();
  }, []);

  const register = async () => {
    const auth = getAuth(app); // Asegúrate de que 'app' es tu app de Firebase inicializada
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      console.log('User account created & signed in!');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    }
  };
  


  return (
    <View style={styles.container}>
      <BackButton/>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput 
        value={email} // Usar el estado del email
        onChangeText={text => setEmail(text)} // Actualizar el estado cuando el texto cambie
        style={styles.input} 
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        secureTextEntry
        value={password} // Usar el estado de la contraseña
        onChangeText={text => setPassword(text)} // Actualizar el estado cuando el texto cambie
        style={styles.input}
      />
      <View style={styles.formContainer}>
        <TouchableOpacity onPress={""} style={styles.button}>
          <Text style={styles.buttonText} onPress={register}>REGISTRAR</Text>
        </TouchableOpacity>
       
          
        </View>

        
      </View>
    
  );
}
