import { AthleteSummary } from "./AthleteSummary";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Shoes } from "./Shoes";

export type ProfileStackParamList = {
  AthleteSummary: undefined;
  Shoes: undefined;
};

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const Profile = () => (
  <>
    <Stack.Navigator>
      <Stack.Screen
        name="AthleteSummary"
        component={AthleteSummary}
        options={{ title: "Summary" }}
      />
      <Stack.Screen
        name="Shoes"
        component={Shoes}
        options={{ title: "Shoes" }}
      />
    </Stack.Navigator>
  </>
);
