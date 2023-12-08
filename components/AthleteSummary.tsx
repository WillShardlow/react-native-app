import { getAthleteInformation } from "../integrations/strava";
import { useEffect, useState } from "react";
import { Text } from "react-native";

export const AthleteSummary = () => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const getFirstName = async () => {
      const { firstname } = await getAthleteInformation();
      setFirstName(firstname);
    };

    getFirstName();
  }, []);

  return <Text>{`Hello my name is ${firstName}`}</Text>;
};
