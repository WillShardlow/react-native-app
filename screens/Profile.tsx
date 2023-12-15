import { AthleteSummary } from "../components/AthleteSummary";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { Button } from "react-native";

type ProfileProps = NativeStackScreenProps<RootStackParamList, "Profile">;

export const Profile = ({ navigation }: ProfileProps) => (
  <>
    <AthleteSummary />
    <Button title="Shoes" onPress={() => navigation.push("Shoes")} />
  </>
);
