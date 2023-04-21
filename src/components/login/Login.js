import React from "react";
import styles from "./styles";
import { useGoogleSignIn } from "../firebase/useGoogleSignIn";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import LoginGoogle from "./LoginGoogle";
const logo = require("../../../assets/logoCompleto.png");

export default function Login() {
  const { token, userInfo, request, promptAsync } = useGoogleSignIn();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput value={""} onChangeText={""} style={styles.input} />

        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry
          value={""}
          onChangeText={""}
          style={styles.input}
        />

        <TouchableOpacity onPress={""} style={styles.button}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>o usa una de tus redes favoritas</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            {/* Inicio Sesion con GOOGLE */}
            <LoginGoogle
              token={token}
              userInfo={userInfo}
              request={request}
              promptAsync={promptAsync}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.FacebookButton}>
            <Text style={styles.buttonText}> Facebook</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomLinksContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.signUpLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
