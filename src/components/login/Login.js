import { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { useNavigation } from "@react-navigation/native";
import logo from "../../../assets/logoCompleto.png";
import styles from "./styles";
import useGoogleAuth from "../hooks/useGoogleAuth";
import ButtonGoogle from "./ButtonGoogle";
WebBrowser.maybeCompleteAuthSession();

// SEPARAR TODO EN COMPONENTES MAS PEQUEÑOS
export default function Login() {
  const { userInfo, promptAsync, request, token } = useGoogleAuth();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput value={""} onChangeText={""} style={styles.input} />

      <Text style={styles.label}>Password</Text>
      <TextInput
        secureTextEntry
        value={""}
        onChangeText={""}
        style={styles.input}
      />
      <View style={styles.formContainer}>
        <TouchableOpacity onPress={""} style={styles.button}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>o usa una de tus redes favoritas</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <ButtonGoogle
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
