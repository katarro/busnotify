import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Index from "../../screens/Index";
import ListBuses from "../../screens/ViewListBuses";
import ViewHome from "../../screens/ViewHome";
import ViewNotifications from "../../screens/ViewNotifications";
import Register from "../../screens/ViewRegister"

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="ViewHome"
          component={Register}
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
        <Stack.Screen
          name="ViewNotifications"
          component={ViewNotifications}
          options={{ headerShown: false }}
        />

        {/* <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}

        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
