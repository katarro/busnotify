import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40, // ajusta la distancia entre la parte superior de la pantalla y el contenido
  },
  title: {
    fontSize: 18,
  },
  inputContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20, // ajusta la distancia entre el título y el input
    width: "80%",
    backgroundColor: "#ebebeb",
  },
  input: {
    width: "100%",
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    color: "black",
    fontSize: 15,
  },
  containerBuses: {
    width: "80%",
    alignItems: "flex-start",
  },
  buses: {
    width: "100%",
    marginTop: 10,
    padding: 10,
    fontSize: 17,
  },
  item: {
    marginBottom: 15,
    borderBottomWidth: 1,
    paddingBottom: 15,
    borderColor: "#ccc",
    width: "100%",
  },
  listItem: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default styles;
