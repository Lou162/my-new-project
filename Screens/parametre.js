import React, {useState, useEffect, useRef} from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Parametrage({ navigation }){
    const goBack = () => navigation.goBack('Scan');
    return(<View>
        <Text>Bonjour</Text>
        <Button title={'goBack'} onPress={goBack}/>
    </View>
)}
    