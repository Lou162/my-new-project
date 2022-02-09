import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Scanner from "./Scanner";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Scanner />
    </NavigationContainer>
  );
}
