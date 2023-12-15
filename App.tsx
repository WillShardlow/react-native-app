import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Shoes } from "./screens/Shoes";
import { Profile } from "./screens/Profile";

export type RootStackParamList = {
  Profile: undefined;
  Shoes: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ title: "Profile" }}
          />
          <Stack.Screen
            name="Shoes"
            component={Shoes}
            options={{ title: "Shoes" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
