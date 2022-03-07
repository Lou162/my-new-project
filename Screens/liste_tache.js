import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from 'react-redux';
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
    url: `http://${ip}/fog/task/current`,
    headers: {
      'fog-api-token': `${api}`,
      'fog-user-token': `${user}`
    }
  };
  useEffect(() => {
    isMountedRef.current = true;
    axios(config)
      .then(function (response) {
        if (isMountedRef.current) {
          setDonnee(response.data.tasks);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    return () => isMountedRef.current = false;
  });

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
        {/* <Text style={style.etat}>{ip} : {user} : {api}</Text> */}
        {
          donnee.map((prop) => {
            return (
              <Text key={prop.id}>{prop.host["name"]} : {prop.state["name"]}</Text>
            );
          })
        }
      </View>

      {/* <Button onPress={goBack} title={`Go back`} /> */}
    </View>
  );
}