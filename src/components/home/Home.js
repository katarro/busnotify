import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Home() {
  const navigation = useNavigation();

  const handleLinkPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleLinkPress("ListBuses")}
      >
        <Text style={styles.text}>Ingresar paradero</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        //onPress={() => handleLinkPress("Asignar alarma a los favoritos")}
      >
        <Text style={styles.text}>Asignar alarma</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        //onPress={() => handleLinkPress("Consultar Saldo")}
      >
        <Text style={styles.text}>Saldo BIP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        //onPress={() => handleLinkPress("Buscar paraderos cercanos")}
      >
        <Text style={styles.text}>Paraderos cercanos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 16,
  },
  item: {
    width: "48%",
    height: 150,
    backgroundColor: "lightgray",
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
