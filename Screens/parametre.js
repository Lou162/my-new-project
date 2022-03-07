import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { style } from "../styles/style_parametre";
import { useSelector, useDispatch } from 'react-redux';
import { selectApi, selectIP, selectUser, setIP, setUser, setApi } from "../src/IP_adresseSlice";

export default function Parametrage({ navigation }) {
    const Ip = useSelector(selectIP);
    const User = useSelector(selectUser);
    const Api = useSelector(selectApi);
    const dispatch = useDispatch();
    const [modif, setModif] = useState(false);
    const goBack = () => navigation.goBack('Scan');
    const ValidateIPaddress = () => {

        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(`${Ip}`)) {
            console.log("l'adresse est bonne")
            setModif(false);
        }
        else {
            alert("You have entered an invalid IP address!")
        }

    }
    // console.log(Ip)
    return (
        <View style={style.container}>
            <View style={style.Header}>
                <View style={style.rectangle1} />
                <Text style={style.parametre}>Paramètres</Text>
                <TouchableOpacity style={style.bouton_retour} onPress={goBack}>
                    <Image
                        style={style.fleche}
                        source={require("../images/fleche-petite-gauche.png")} />
                </TouchableOpacity>
            </View>
            <View style={style.param}>
                <View style={style.parametre_ip}>
                    <Text style={style.Ip}>Adresse IP</Text>
                    <TextInput
                        style={style.input}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        onChangeText={(nextIp) => dispatch(setIP(nextIp))}
                        value={Ip}
                        editable={modif}
                        selectTextOnFocus={modif}
                    />

                </View>
                <View style={style.parametre_ip_2}>
                    <Text style={style.Ip}>User Token</Text>
                    <TextInput
                        style={style.input}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        value={User}
                        onChangeText={value => dispatch(setUser(value))}
                        editable={modif}
                        selectTextOnFocus={modif} />
                </View>
                <View style={style.parametre_ip_3}>
                    <Text style={style.Ip}>Api Token</Text>
                    <TextInput
                        style={style.input}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                        value={Api}
                        onChangeText={value => dispatch(setApi(value))}
                        editable={modif}
                        selectTextOnFocus={modif} />
                </View>
            </View>

            <View style={style.footer}>
                <View style={style.rectangle2} />
                {!modif && <View style={style.container_modifier}>
                    <TouchableOpacity style={style.bouton_modifier} disabled={modif} onPress={() => { setModif(true) }}>
                        <Text style={style.modifier}>Modifier</Text>
                    </TouchableOpacity>
                </View>}
                {modif && <View style={style.container_valider}>
                    <TouchableOpacity style={style.bouton_valider} disabled={!modif} onPress={() => { ValidateIPaddress() }}>
                        <Text style={style.valider}>Valider</Text>
                    </TouchableOpacity>
                </View>}
            </View>
        </View>
    )
}
