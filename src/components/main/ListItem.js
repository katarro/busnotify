import styles from "./styles";
import { View, Text } from "react-native";

const ListItem = ({ id, dist, time_min, time_max }) => {
  return (
    <View>
      <Text style={styles.item}>
        Micro numero: {id}
        {"\n"}
        Distancia en metros: {dist}
        {"\n"}
        Tiempo mínimo de llegada: {time_min}
        {"\n"}
        Tiempo máximo de llegada: {time_max}
        {"\n"}
      </Text>
    </View>
  );
};

export default ListItem;
