import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveData(data) {
  try {
    const dataFormated = JSON.stringify(data);
    await AsyncStorage.setItem("@myApp:data", dataFormated);
  } catch (error) {
    console.log(error);
  }
}
