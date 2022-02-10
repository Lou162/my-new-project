import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Tache({ navigation }) {
  const goBack = () => navigation.goBack('Scan');

  return (
    <View style={styles.container}>
      <Text>Details screen</Text>
      <Button onPress={goBack} title={`Go back`} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "azure",
    alignItems: "center",
    justifyContent: "center",
  },
});