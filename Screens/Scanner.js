import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Alert } from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useIsFocused } from "@react-navigation/native";

import { styles } from "../styles/style_scanner"

// var myHeaders = new Headers();
// myHeaders.append("fog-api-token", "ZThkNjYxMTliZDFmMjA5MDMxMDRlMTgwOTNiOTdhY2Q4MDU4ZjU3N2JkZmE5NzM5N2ExOWYwMzhjNjAxNGEzZjNiNDk2YWVhZWMzNWJkYzIxNzI0OTBjZWM4ZDE1MjExZWY4MTgzZDMyNjVjNGNmYWY3MDVlNjkyNjgxYWZjMmU=");
// myHeaders.append("fog-user-token", "OTgxMzVkMDg0NmY2NGNlOWIyN2I3NzUxYmI4MDQ3NGE1NTI4MWUwNDZjZGRmNTM0OWQ2N2FiN2U4MjRiMDYyYTg4NmM3ZDFiODU4NTAxZWI4ZWNhZTQ3YmRiNjYwMmZkZmMyYjUyZDMzZWVhZDU5NjZlZGYwYWQ0ODUxNTNkZDM=");
// myHeaders.append("Content-Type", "text/plain");

// var raw = "{\"taskTypeID\":1}";
// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };


export default function Scanner({ navigation }) {
  const isFocused = useIsFocused();
  const goBack = () => { navigation.navigate('liste') }
  const goBack2 = () => { navigation.navigate('parametre') }
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [donnee, setDonnee] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await
        BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // setDonnee(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  };

  // const Maj = () => {
  //   setScanned(false);
  //   fetch(`http://192.168.5.252/fog/host/${donnee}/task`, requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  // };


  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      {isFocused && <BarCodeScanner
        id="scanner"
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.QR_Code}
      />}
      <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
      <View style={styles.Header}>
        <View style={styles.rectangle1} />
        <TouchableOpacity style={styles.group9} onPress={goBack}>
          <Image
            style={styles.logo}
            source={require('../images/copy.png')} />
        </TouchableOpacity>

        <Text style={styles.qr_code_app}>
          QR CODE APP
        </Text>
        <View>
          <TouchableOpacity style={styles.group10} onPress={goBack2}>
            <Image
              style={styles.reglage}
              source={require('../images/reglages.png')} />
          </TouchableOpacity>

        </View>
      </View>
      <View style={styles.Footer}>
        <View style={styles.rectangle2} />
        {scanned && <View style={styles.Bouton_mise}>
          <TouchableOpacity style={styles.container_bouton} onPress={() => { setScanned(false) }} >
            <Text style={styles.mettre_a_jour}>Mettre à jour</Text>
          </TouchableOpacity>
        </View>}
        {scanned && <View style={styles.Bouton_Annuler}>
          <TouchableOpacity style={styles.container_bouton2} onPress={() => { setScanned(false) }} >
            <Text style={styles.Annuler}>Annuler</Text>
          </TouchableOpacity>
        </View>}
      </View>
    </View>
  );
}

