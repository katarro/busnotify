import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import ListItem from "./ListItem";

export default function Main() {
  const [paradero, setParadero] = useState("");
  const data = [
    { id: "0", title: "214" },
    { id: "1", title: "301" },
    { id: "2", title: "302" },
    { id: "3", title: "201" },
    { id: "4", title: "H13" },
    { id: "5", title: "H07" },
  ];

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Buses</Text>
      <View style={styles.inputContainer}>
        <TextInput
          type="text"
          style={styles.input}
          value={paradero}
          placeholder="Buscar Paradero"
          onChangeText={(texto) => setParadero(texto)}
        />
      </View>
      <View style={styles.containerBuses}>
        <View style={styles.buses}>
          {data.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </View>
      </View>
    </View>
  );
}
