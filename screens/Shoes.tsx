import { Text } from "../components/Text";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type ShoesProps = NativeStackScreenProps<RootStackParamList, "Shoes">;

export const Shoes = ({ navigation }: ShoesProps) => <Text>Shoes</Text>;
