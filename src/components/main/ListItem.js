import styles from "./styles";
import { View, Text } from "react-native";

const ListItem = ({ item }) => {
  return (
    <View>
      <Text style={styles.item}>{item.title}</Text>
    </View>
  );
};

export default ListItem;
