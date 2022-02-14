import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button} from "react-native";

var axios = require('axios');
var data = '{"taskTypeID":1}';

var config = {
  method: 'get',
  url: 'http://192.168.5.252/fog/task/current',
  headers: { 
    'fog-api-token': 'ZThkNjYxMTliZDFmMjA5MDMxMDRlMTgwOTNiOTdhY2Q4MDU4ZjU3N2JkZmE5NzM5N2ExOWYwMzhjNjAxNGEzZjNiNDk2YWVhZWMzNWJkYzIxNzI0OTBjZWM4ZDE1MjExZWY4MTgzZDMyNjVjNGNmYWY3MDVlNjkyNjgxYWZjMmU=', 
    'fog-user-token': 'OTgxMzVkMDg0NmY2NGNlOWIyN2I3NzUxYmI4MDQ3NGE1NTI4MWUwNDZjZGRmNTM0OWQ2N2FiN2U4MjRiMDYyYTg4NmM3ZDFiODU4NTAxZWI4ZWNhZTQ3YmRiNjYwMmZkZmMyYjUyZDMzZWVhZDU5NjZlZGYwYWQ0ODUxNTNkZDM=', 
    'Content-Type': 'text/plain'
  },
  data : data
};


export default function Tache({ navigation }) {
  const goBack = () => navigation.goBack('Scan');
  const [donnee, setDonnee] = useState([]);

  useEffect(()=>{
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.tasks[0].state["name"]));
      setDonnee(JSON.stringify(response.data.tasks[0].state["name"]));
    })
    .catch(function (error) {
      console.log(error);
    });});


  return (
    <View style={styles.container}>
      <Text>{donnee}</Text>
      <Text>{donnee.length}</Text>
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