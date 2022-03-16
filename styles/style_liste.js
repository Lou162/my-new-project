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
    liste_icon:{
        position:"absolute",
        width: 50,
        height:50,
        transform:[{translateX: 26},{translateY:65},{rotate:"0deg"}],
        overflow:"hidden",
        backgroundColor:"rgba(0,0,0,0)"
    },
    bouton_retour:{
        position:"absolute",
        width:50,
        height:50,
        borderRadius:15,
        opacity:1,
        left: 0,
        right:"auto",
        top:0,
        bottom:"auto",
        transform:[{translateX:0},{translateY:0},{rotate:"0deg"}],
        backgroundColor:"rgba(229,229,229,1)"
    },
    fleche:{
        position:"absolute",
        width:50,
        height:50,
        borderRadius:0,
        opacity:1,
        left:0,
        right:"auto",
        top:0,
        bottom:"auto",
        transform:[{translateX:0},{translateY:0},{rotate:"0deg"}]
    },
    parametre_icone:{
        position:"absolute",
        width:50,
        height:50,
        transform:[{translateX:284},{translateY:65},{rotate:"0deg"}],
        overflow:"hidden"
    },
    bouton_reglage:{
        position:"absolute",
        width:50,
        height:50,
        borderRadius:15,
        opacity:0.75,
        left:0,
        bottom:"auto",
        backgroundColor:"rgba(229,229,229,1)"
    }
    
});

export { style }