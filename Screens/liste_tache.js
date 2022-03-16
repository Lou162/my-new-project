import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, ImageBackground } from "react-native";
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

  const cancel = (host) => {
    var config2 = {
      method: 'delete',
      url: `http://${ip}/fog/host/${host}/cancel`,
      headers: {
        'fog-api-token': `${api}`,
        'fog-user-token': `${user}`
      },
    };
    axios(config2)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const createTwoButtonAlert = (machine) =>
    Alert.alert(
      "Attention",
      "Vous êtes sûr de vouloir supprimer cette machine ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        { text: "OK", onPress: () => cancel(machine) }
      ]
    );


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
      <View style={style.liste_icon}>
        <TouchableOpacity style={style.bouton_retour} onPress={goBack}>
          <Image
            style={style.fleche}
            source={require('../images/fleche-petite-gauche.png')} />
        </TouchableOpacity>
      </View>
      <View style={style.parametre_icone}>
        <TouchableOpacity style={style.bouton_reglage} onPress={goBack2}>
          <Image
            style={style.reglage}
            source={require('../images/reglages.png')} />
        </TouchableOpacity>
      </View>
      <Text style={style.appareils}>APPAREILS</Text>

      <ScrollView style={style.liste_machine}>
        {
          donnee.map((prop) => {
            return (
                <View key={prop.id} style={style.container2}>
                  <Image source={require('../images/Group_8.png')} style={style.background}/>
                    <View style={style.group2}>
                      <Text style={style.name}>{prop.host["name"]}{"\n"}</Text> 
                      <Text style={style.text}>{prop.state["name"]} {"\n"}</Text>
                    </View> 
                    <TouchableOpacity onPress={() => { createTwoButtonAlert(prop.host["id"]) }}>
                      <Image source={require('../images/Group_12.png')} style={style.supprimer}/>
                    </TouchableOpacity>    
                </View>
            );
          })
        }
      </ScrollView>
    </View>
  );
}