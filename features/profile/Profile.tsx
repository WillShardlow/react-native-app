import { AthleteSummary } from "./AthleteSummary";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Shoes } from "./Shoes";
import { useEffect, useState } from "react";
import {
  AthleteInformationResponse,
  fetchAthleteInformation,
} from "../../integrations/strava";
import { Text } from "../../components/Text";

export type ProfileStackParamList = {
  AthleteSummary: undefined;
  Shoes: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const Profile = () => {
  const [athleteInformation, setAthleteInformation] =
    useState<AthleteInformationResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getAthleteInformation = async () => {
      await fetchAthleteInformation().then((athleteInformation) => {
        setAthleteInformation(athleteInformation);
        setIsLoading(false);
      });
    };

    getAthleteInformation();
  }, []);

  return (
    <>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : athleteInformation ? (
        <Stack.Navigator>
          <Stack.Screen name="AthleteSummary" options={{ title: "Summary" }}>
            {(props) => (
              <AthleteSummary
                athleteInformation={athleteInformation}
                {...props}
              />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="Shoes"
            component={Shoes}
            options={{ title: "Shoes" }}
          />
        </Stack.Navigator>
      ) : (
        <Text>No athlete data</Text>
      )}
    </>
  );
};
