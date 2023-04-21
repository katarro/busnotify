import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

export default function LoginGoogle(props) {
  const { token, userInfo, request, promptAsync } = props;

  return (
    <View>
      {userInfo === null ? (
        <Text
          title="Google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
          style={styles.buttonText}
        >
          Google
        </Text>
      ) : (
        navigation.navigate("Main")
      )}
    </View>
  );
}
