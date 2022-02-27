import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
    container: {
        position: "relative",
        width: Dimensions.get("window").width,
        height: 800,
        borderRadius: 0,
        overflow: "hidden",
        transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
        backgroundColor: "rgba(255,255,255,1)",
        left: 0,
        top: 0
    },
    Header: {
        position: "absolute",
        width: 482,
        height: 110,
        transform: [{ translateX: -108 }, { translateY: 25 }, { rotate: "0deg" }],
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0)"
    },
    rectangle1: {
        position: "absolute",
        width: 482,
        height: 110,
        borderRadius: 0,
        opacity: 1,
        left: 0,
        right: "auto",
        top: 0,
        bottom: "auto",
        transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
        backgroundColor: "rgba(13,44,84,1)"
    },
    liste_des_ordi: {
        position: "absolute",
        width: "auto",
        height: "auto",
        left: 200,
        right: "auto",
        top: 44,
        bottom: "auto",
        transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
        fontFamily: "Roboto",
        fontWeight: "400",
        textDecorationLine: "none",
        fontSize: 18,
        color: "rgba(255,255,243,1)",
        textAlign: "center",
        textAlignVertical: "top",
        letterSpacing: 0.1
    },
    bouton_retour: {
        position: "absolute",
        width: 50,
        height: 50,
        transform: [{ translateX: 123 }, { translateY: 32 }, { rotate: "0deg" }],
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0)"
    },
    fleche: {
        position: "absolute",
        width: 41,
        height: 41,
        borderRadius: 0,
        opacity: 1,
        left: 5,
        right: "auto",
        top: 4,
        bottom: "auto",
        transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }]
    },
    bouton_reglage: {
        position: "absolute",
        width: 50,
        height: 50,
        transform: [{ translateX: 400 }, { translateY: 32 }, { rotate: "0deg" }],
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0)"
    },
    reglage: {
        position: "absolute",
        width: 40,
        height: 40,
        borderRadius: 0,
        opacity: 1,
        left: 5,
        right: "auto",
        top: 5,
        bottom: "auto",
        transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }]
    },
    liste_machine: {
        position: "absolute",
        width: 247,
        height: 91,
        transform: [{ translateX: 57 }, { translateY: 150 }, { rotate: "0deg" }],
        overflow: "hidden",
        backgroundColor: "rgba(0,0,0,0)",
    },
    etat: {
        position: "absolute",
        width: "auto",
        height: "auto",
        left: 0,
        right: "auto",
        top: 0,
        bottom: "auto",
        transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
        fontFamily: "Roboto",
        fontWeight: "500",
        textDecorationLine: "none",
        fontSize: 14,
        color: "rgb(1,1,1)",
        textAlign: "left",
        textAlignVertical: "top",
        letterSpacing: 0.1
    }
});

export { style }