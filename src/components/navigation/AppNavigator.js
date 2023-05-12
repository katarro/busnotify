import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Index from "../../screens/Index";
import ListBuses from "../../screens/viewListBuses";
import Home from "../../screens/viewHome";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="viewHome"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListBuses"
          component={ListBuses}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
