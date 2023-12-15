import { StatusBar } from "expo-status-bar";
import { Profile } from "./features/profile/Profile";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Profile />
    </NavigationContainer>
  );
}
