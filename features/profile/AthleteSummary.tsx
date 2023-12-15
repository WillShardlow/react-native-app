import {
  AthleteInformationResponse,
  fetchAthleteInformation,
} from "../../integrations/strava";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import { Text } from "../../components/Text";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "./Profile";

type AthleteSummaryProps = NativeStackScreenProps<
  ProfileStackParamList,
  "AthleteSummary"
>;

export const AthleteSummary = ({ navigation }: AthleteSummaryProps) => {
  const [athleteInformation, setAthleteInformation] =
    useState<AthleteInformationResponse>();

  useEffect(() => {
    const getAthleteInformation = async () => {
      const athleteInformation = await fetchAthleteInformation();
      setAthleteInformation(athleteInformation);
    };

    getAthleteInformation();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: athleteInformation?.profile }}
        style={styles.image}
      />
      <Text>{`${athleteInformation?.firstname} ${athleteInformation?.lastname}`}</Text>
      <Button title="Shoes" onPress={() => navigation.push("Shoes")} />
    </View>
  );
};

const imageSizeInPixels = 200;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(19,124,206,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: imageSizeInPixels,
    height: imageSizeInPixels,
    borderRadius: imageSizeInPixels / 2,
    marginBottom: 20,
  },
});
