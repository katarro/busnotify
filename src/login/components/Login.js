import React, { useState } from "react";
import styles from "./styles";
import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const logo = require("../../../assets/logoCompleto.png");

  const handleLogin = () => {
    console.log(`Login con usuario: ${username} y contraseña: ${password}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>o usa una de tus redes favoritas</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.buttonText}> Google</Text>
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