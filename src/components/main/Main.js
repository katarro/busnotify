import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles";
import ListItem from "./ListItem";
import useGetBusStopData from "../hooks/useBusStopData";

export default function Main() {
  const { data, loading, getBusStopData } = useGetBusStopData();
  const [paradero, setParadero] = useState("");

  return (
    <View style={styles.container}>
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
