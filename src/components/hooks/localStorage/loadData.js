import AsyncStorage from "@react-native-async-storage/async-storage";

export async function loadData() {
  try {
    const data = await AsyncStorage.getItem("@myApp:data");
    if (data !== null) {
      const dataFormated = JSON.parse(data);
      console.log(dataFormated);
      return dataFormated;
    }
  } catch (error) {
    console.log(error);
  }
}
