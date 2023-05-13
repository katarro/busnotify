import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles";
import ListItem from "./ListItem";
import useGetBusStopData from "../hooks/useBusStopData";
import useFavoritos from "../hooks/useFavoritos";
import BackButton from "../goBack/BackButton";

export default function Main() {
  const { data, loading, getBusStopData } = useGetBusStopData();
  const { favoritos, agregarFavorito, eliminarFavorito } = useFavoritos();
  const [paradero, setParadero] = useState("");

  React.useEffect(() => {
    getBusStopData();
  }, []);

  return (
    <View style={styles.container}>
      <BackButton />
      <Text style={styles.title}>Lista de Buses</Text>
      <View style={styles.inputContainer}>
        <TextInput
          type="text"
          style={styles.input}
          value={paradero}
          placeholder="Codigo Paradero"
          onChangeText={(texto) => setParadero(texto)}
        />
      </View>
      <Button
        title={"Buscar"}
        onPress={() => {
          getBusStopData(paradero);
        }}
      />
      <View style={styles.containerBuses}>
        <View style={styles.buses}>
          {loading ? (
            <Text>Loading...</Text>
          ) : (
            <View>
              {data &&
                data.map((servicio) => (
                  <View key={servicio.id}>
                    {servicio.buses.map((bus) => (
                      <ListItem
                        key={bus.id}
                        patente={bus.id}
                        id={servicio.id}
                        dist={bus.meters_distance}
                        time_min={bus.min_arrival_time}
                        time_max={bus.max_arrival_time}
                        favoritos={favoritos}
                        agregarFavorito={agregarFavorito}
                        eliminarFavorito={eliminarFavorito}
                      />
                    ))}
                  </View>
                ))}
            </View>
          )}
        </View>
      </View>
    </View>
  );
}
