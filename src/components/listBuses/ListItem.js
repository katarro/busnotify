import { View, Text, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

const ListItem = (props) => {
  const {
    patente,
    id,
    dist,
    time_min,
    time_max,
    favoritos = [],
    agregarFavorito = () => {},
    eliminarFavorito = () => {},
  } = props;

  const handleFavoritoPress = () => {
    const isBusFavorito = favoritos.some((f) => f.patente === patente);
    let bus = { id, patente, dist, time_min, time_max };

    if (isBusFavorito) {
      eliminarFavorito(bus);
      console.log("Eliminado de Favoritos");
    } else {
      agregarFavorito(bus);
      console.log("Agregado a Favoritos");
    }
  };

  const isBusFavorito = favoritos.some((f) => f.patente === patente);

  return (
    <View>
      <TouchableOpacity onPress={handleFavoritoPress}>
        <AntDesign
          name={isBusFavorito ? "heart" : "hearto"}
          size={24}
          color={isBusFavorito ? "red" : "black"}
        />
      </TouchableOpacity>
      <Text style={styles.item}>
        Recorrido: <Text style={{ fontWeight: "bold" }}>{id}</Text>
        {"\n"}
        Patente : {patente} {"\n"}
        Distancia: {dist} mt
        {"\n"}
        Bus llega en:{" "}
        <Text style={{ fontWeight: "bold" }}>
          {time_min} a {time_max} minutos
        </Text>
        {"\n"}
      </Text>
    </View>
  );
};

export default ListItem;
