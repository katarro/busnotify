import { Text, TouchableOpacity, View } from "react-native";
import { loadData } from "../hooks/localStorage/loadData";
import BackButton from "../goBack/BackButton";
import ListItem from "../listBuses/ListItem";
import React from "react";
import { usePermissions, sendPushNotificationAsync } from "expo-notifications";

export default function Notifications() {
  const [data, setData] = React.useState([]);

  const handlePress = async (id, time_min, time_max) => {
    try {
      const {
        data: { data: token },
      } = await getExpoPushTokenAsync();
      await sendPushNotificationAsync({
        to: token,
        title: "Nueva notificación",
        body: `La micro: ${id}, llegará de ${time_min} a ${time_max} minutos`,
      });
      console.log("Notificación enviada exitosamente");
    } catch (error) {
      console.error("Error al enviar la notificación:", error);
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const loadedData = await loadData();
      setData(Object.values(loadedData));
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text>Notifications</Text>
      <br />
      <BackButton />
      <br />
      <br />
      <View>
        {data.map((bus) => (
          <TouchableOpacity
            onPress={() => handlePress(bus.id, bus.time_min, bus.time_max)}
            key={bus.patente}
          >
            <ListItem
              key={bus.patente}
              patente={bus.patente}
              id={bus.id}
              dist={bus.meters_distance}
              time_min={bus.time_min}
              time_max={bus.time_max}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

// [{"id":"506","patente":"FLXW-51","dist":905,"time_min":0,"time_max":3}]
