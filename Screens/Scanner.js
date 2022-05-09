import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity,StyleSheet, Modal} from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser, selectApi, selectIP } from "../src/IP_adresseSlice";
import BarcodeMask from 'react-native-barcode-mask';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useIsFocused } from "@react-navigation/native";

import { styles } from "../styles/style_scanner"
import { style } from "../styles/style_accueil"

export default function Scanner({ navigation }) {

  const isFocused = useIsFocused();
  const goBack = () => { navigation.navigate('liste') }
  const goBack2 = () => { navigation.navigate('parametre') }
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [donnee, setDonnee] = useState("");
  const ip = useSelector(selectIP);
  const user = useSelector(selectUser);
  const api = useSelector(selectApi);
  var axios = require('axios');
  var data = '{"taskTypeID":1}';
  var myHeaders = new Headers();
  myHeaders.append("fog-api-token", `${api}`);
  myHeaders.append("fog-user-token", `${user}`);

  var raw = "{\"taskTypeID\":1}";
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };



  useEffect(() => {
    (async () => {
      const { status } = await
      BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setDonnee(data);
  };

  const Maj = () => {
    if(Number(donnee)){
      fetch(`http://${ip}/fog/host/${donnee}/task`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
      console.log(donnee)
    }
    else{
      let donnee_split = donnee.split(" ")
      var config = {
        method: 'post',
        url: `http://${ip}/fog/group/${donnee_split[0]}/task`,
        headers: { 
          'fog-api-token': `${api}`, 
          'fog-user-token': `${user}`, 
          'Content-Type': 'text/plain'
        },
        data : data
      };
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    };
    setScanned(false);
  };


  if (hasPermission === null) {
    return (
    <View style={style.container}>
      <Image
        style={style.fond}
        source={require('../images/Group_19.png')} />
      <View style={style.group1}>
        <Image
          style={style.qr_code_image}
          source={require('../images/qr-code.png')} />
          <Text style={style.qr_code}>Qr code</Text>
          <Text style={style.scanner}>Scanner</Text>
      </View>
    </View>);
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (

    <View style={styles.container}>
      {isFocused && <BarCodeScanner
        id="scanner"
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.scan}
      />}
      <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
      <View style={styles.Header}>
        <TouchableOpacity style={styles.liste_bouton} onPress={goBack}>
          <Image
            style={styles.liste}
            source={require('../images/copy.png')} />
        </TouchableOpacity>

        <Text style={styles.qr_code_app}>
          Fog Scanner
        </Text>
        <View>
          <TouchableOpacity style={styles.parametre_bouton} onPress={goBack2}>
            <Image
              style={styles.reglage}
              source={require('../images/reglages.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={scanned}>
            <View style={styles.modal}>
              <Text style={styles.scan_fait}>Scan {donnee}</Text>
            <Image
              style={styles.image}
              source={require('../images/Group_6.png')}/>
              <TouchableOpacity style={styles.group6} onPress={() => { Maj() }}>
                <Text style={styles.mise}>mettre à jour</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.group20} onPress={() => { setScanned(false)}}>
                <Text style={styles.annuler}>cancel</Text>
              </TouchableOpacity>
            </View>
            
          </Modal>
      </View>
    </View>
  );
}

