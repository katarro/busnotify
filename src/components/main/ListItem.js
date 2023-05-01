import styles from "./styles";
import { View, Text } from "react-native";

const ListItem = (props) => {
  const { patente, id, dist, time_min, time_max } = props;
  return (
    <View>
      <Text style={styles.item}>
        Micro numero: {id}
        {"\n"}
        Patente : {patente} {"\n"}
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
