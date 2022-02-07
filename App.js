import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import BarcodeMask from 'react-native-barcode-mask';
import {BarCodeScanner} from 'expo-barcode-scanner';
    
var myHeaders = new Headers();
myHeaders.append("fog-api-token", "ZThkNjYxMTliZDFmMjA5MDMxMDRlMTgwOTNiOTdhY2Q4MDU4ZjU3N2JkZmE5NzM5N2ExOWYwMzhjNjAxNGEzZjNiNDk2YWVhZWMzNWJkYzIxNzI0OTBjZWM4ZDE1MjExZWY4MTgzZDMyNjVjNGNmYWY3MDVlNjkyNjgxYWZjMmU=");
myHeaders.append("fog-user-token", "OTgxMzVkMDg0NmY2NGNlOWIyN2I3NzUxYmI4MDQ3NGE1NTI4MWUwNDZjZGRmNTM0OWQ2N2FiN2U4MjRiMDYyYTg4NmM3ZDFiODU4NTAxZWI4ZWNhZTQ3YmRiNjYwMmZkZmMyYjUyZDMzZWVhZDU5NjZlZGYwYWQ0ODUxNTNkZDM=");
myHeaders.append("Content-Type", "text/plain");

var raw = "{\"taskTypeID\":1}";
var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [donnee, setDonnee] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await 
  BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setDonnee(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  };

  const Maj = () => {
    setScanned(false);
    fetch(`http://192.168.5.252/fog/host/${donnee}/task`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  };


  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      <BarcodeMask edgeColor="#62B1F6" showAnimatedLine/>
      <View style={styles.boutons}>
        {scanned && <Button title={`Mettre a jour l\'appareil`} onPress={() => Maj()}/>}
      </View>
      <View style={styles.boutons}>
        {scanned && <Button title={`re scan`} onPress={() => setScanned(false)}/>} 
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  boutons: {
    height: 30,
    bottom: 50
  }
});