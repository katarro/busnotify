import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import logo from "../../../assets/logoCompleto.png";
import React, { useEffect, useState } from "react";
import BackButton from "../goBack/BackButton";
import styles from "../login/styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "@firebase/app";
//import { firebaseConfig } from "../firebase/firebaseConfig";
import { app, auth, firebaseConfig } from "../firebase/firebaseConfig";

export default function Register() {
  const [email, setEmail] = useState(""); // Estado para el campo de email
  const [password, setPassword] = useState("");

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

  const register = () => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email} // Usar el estado del email
        onChangeText={(text) => setEmail(text)} // Actualizar el estado cuando el texto cambie
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        secureTextEntry
        value={password} // Usar el estado de la contraseña
        onChangeText={(text) => setPassword(text)} // Actualizar el estado cuando el texto cambie
        style={styles.input}
      />
      <View style={styles.formContainer}>
        <TouchableOpacity onPress={register} style={styles.button}>
          <Text style={styles.buttonText}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
