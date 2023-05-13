import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Text } from "react-native";

export default function BackButton() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>Retroceder</Text>
    </TouchableOpacity>
  );
}
