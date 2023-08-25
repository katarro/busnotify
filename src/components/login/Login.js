import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import react, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import logo from "../../../assets/logoCompleto.png";
import styles from "./styles";
import useGoogleAuth from "../hooks/useGoogleAuth";
import ButtonGoogle from "./ButtonGoogle";
WebBrowser.maybeCompleteAuthSession();

// SEPARAR TODO EN COMPONENTES MAS PEQUEÑOS
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  const { userInfo, promptAsync, request, token } = useGoogleAuth();

  const Login = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={(email) => {
          setEmail(email);
        }}
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={(password) => {
          setPassword(password);
        }}
        style={styles.input}
      />
      <View style={styles.formContainer}>
        <TouchableOpacity onPress={Login} style={styles.button}>
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
            <Text style={styles.forgotPasswordLink}>
              ¿Olvidó su contraseña?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.signUpLink}
              onPress={() => navigation.navigate("Register")}
            >
              {" "}
              Registrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
