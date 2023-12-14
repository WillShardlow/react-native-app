import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AthleteSummary } from "./components/AthleteSummary";

export default function App() {
  return (
    <View style={styles.container}>
      <AthleteSummary />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(19,124,206,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
});
