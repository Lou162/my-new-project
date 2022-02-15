import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Scanner from "./Screens/Scanner";
import Tache from "./Screens/liste_tache";
import Parametrage from "./Screens/parametre";

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Scan" component={Scanner} />
      <Stack.Screen name="liste" component={Tache} />
      <Stack.Screen name="parametre" component={Parametrage} />
    </Stack.Navigator>
  );
}