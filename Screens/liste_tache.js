import React, {useState, useEffect, useRef} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Tache({ navigation }) {
  const goBack = () => navigation.goBack('Scan');
  const [donnee, setDonnee] = useState([]);
  const isMountedRef = useRef(null);


  
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://192.168.5.252/fog/task/current',
  headers: { 
    'fog-api-token': 'ZThkNjYxMTliZDFmMjA5MDMxMDRlMTgwOTNiOTdhY2Q4MDU4ZjU3N2JkZmE5NzM5N2ExOWYwMzhjNjAxNGEzZjNiNDk2YWVhZWMzNWJkYzIxNzI0OTBjZWM4ZDE1MjExZWY4MTgzZDMyNjVjNGNmYWY3MDVlNjkyNjgxYWZjMmU=', 
    'fog-user-token': 'OTgxMzVkMDg0NmY2NGNlOWIyN2I3NzUxYmI4MDQ3NGE1NTI4MWUwNDZjZGRmNTM0OWQ2N2FiN2U4MjRiMDYyYTg4NmM3ZDFiODU4NTAxZWI4ZWNhZTQ3YmRiNjYwMmZkZmMyYjUyZDMzZWVhZDU5NjZlZGYwYWQ0ODUxNTNkZDM='
  }
};

useEffect(()=>{
  isMountedRef.current = true;
  axios(config)
  .then(function (response) {
    if(isMountedRef.current){
      console.log(JSON.stringify(response.data.tasks[0].state["name"]));
      setDonnee(response.data.tasks);
    } 
  })
  .catch(function (error) {
    console.log(error);
  });
  return () => isMountedRef.current = false;},[]);

  return (
    <View style={styles.container}>
      {
        donnee.map((prop) => {
          return (
            <Text key = {prop.id}>{prop.host["name"]} : {prop.state["name"]}</Text>
          );
       })
      }
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