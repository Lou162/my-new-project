import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {useSelector} from 'react-redux';
import { selectUser, selectApi, selectIP } from "../src/IP_adresseSlice";
import { style } from "../styles/style_liste";

export default function Tache({ navigation }) {
  const goBack = () => navigation.goBack('Scan');
  const ip = useSelector(selectIP);
  const user = useSelector(selectUser);
  const api = useSelector(selectApi);
  const [donnee, setDonnee] = useState([]);
  const isMountedRef = useRef(null);
  const goBack2 = () => { navigation.navigate('parametre') }
  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'http://192.168.5.252/fog/task/current',
    headers: {
      'fog-api-token': 'ZThkNjYxMTliZDFmMjA5MDMxMDRlMTgwOTNiOTdhY2Q4MDU4ZjU3N2JkZmE5NzM5N2ExOWYwMzhjNjAxNGEzZjNiNDk2YWVhZWMzNWJkYzIxNzI0OTBjZWM4ZDE1MjExZWY4MTgzZDMyNjVjNGNmYWY3MDVlNjkyNjgxYWZjMmU=',
      'fog-user-token': 'OTgxMzVkMDg0NmY2NGNlOWIyN2I3NzUxYmI4MDQ3NGE1NTI4MWUwNDZjZGRmNTM0OWQ2N2FiN2U4MjRiMDYyYTg4NmM3ZDFiODU4NTAxZWI4ZWNhZTQ3YmRiNjYwMmZkZmMyYjUyZDMzZWVhZDU5NjZlZGYwYWQ0ODUxNTNkZDM='
    }
  };
  console.log(ip)
  console.log(user)
  console.log(api)
  useEffect(() => {
    isMountedRef.current = true;
    axios(config)
      .then(function (response) {
        if (isMountedRef.current) {
          console.log(JSON.stringify(response.data.tasks[0].state["name"]));
          setDonnee(response.data.tasks);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => isMountedRef.current = false;
  }, []);

  return (
    <View style={style.container}>
      <View style={style.Header}>
        <View style={style.rectangle1} />
        <Text style={style.liste_des_ordi}>Liste des ordinateurs</Text>
        <TouchableOpacity style={style.bouton_retour} onPress={goBack}>
          <Image
            style={style.fleche}
            source={require('../images/fleche-petite-gauche.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={style.bouton_reglage} onPress={goBack2}>
          <Image
            style={style.reglage}
            source={require('../images/reglages.png')} />
        </TouchableOpacity>
      </View>
      <View style={style.liste_machine}>
        <Text style={style.etat}>{ip} : {user} : {api}</Text>
        {/* {
        donnee.map((prop) => {
          return (
            <Text key = {prop.id}>{prop.host["name"]} : {prop.state["name"]}</Text>
          );
       })
      } */}
      </View>

      {/* <Button onPress={goBack} title={`Go back`} /> */}
    </View>
  );
}