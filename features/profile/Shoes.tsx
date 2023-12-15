import { Text } from "../../components/Text";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "./Profile";

type ShoesProps = NativeStackScreenProps<ProfileStackParamList, "Shoes">;

export const Shoes = ({ navigation }: ShoesProps) => <Text>Shoes</Text>;
