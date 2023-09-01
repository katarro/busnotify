import React from "react"; // Corregido
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../../assets/logoCompleto.png";
import styles from "./styles";

export default function Login() {
  const navigation = useNavigation(); // Añadido

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.formContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Index")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>
      </View>

     
    </View>
  );
}
