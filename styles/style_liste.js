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
    },
    reglage:{
        position:"absolute",
        width:50,
        height:50,
        left:0,
        right:"auto",
        top:0,
        bottom:"auto"
    },
    appareils:{
        position:"absolute",
        width:"auto",
        height:"auto",
        left:26,
        right:"auto",
        top:171,
        bottom:"auto",
        fontFamily:"Roboto",
        fontWeight:"400",
        textDecorationLine:"none",
        fontSize:24,
        color:"rgba(0,0,0,1)",
        textAlign:"center",
        textAlignVertical:"top"
    },
    frame3:{
        position:"absolute",
        width:"auto",
        height:"auto",
        left:62,
        right:"auto",
        top:221,
        bottom:"auto",
        display:"flex",
        flexDirection:"column"
    },
    background:{
        // position:"relative",
        width:236,
        height:49,
        // right:"auto",
    },
    group2:{
        position:"absolute",
        width:60,
        height:14,
        transform:[{translateX:21},{translateY:17},{rotate:"0deg"}]
    },
    name:{
        position:"absolute",
        width:"auto",
        height:"auto",
        left:0,
        right:"auto",
        fontFamily:"Roboto",
        fontWeight:"500",
        fontSize:12,
        color:"rgba(0,0,0,1)",
        textAlign: "center",
        textAlignVertical:"top"
    },
    text:{
        position:"absolute",
        width:"auto",
        height:"auto",
        left:39,
        right:"auto",
        fontFamily:"Roboto",
        fontWeight:"400",
        fontSize:12,
        color:"rgba(0,0,0,1)",
        textAlign:"center",
        textAlignVertical:"top"
    },
    liste_machine:{
        position:"relative",
        width:236,
        height:49,
        marginBottom:15
    },
    group22:{
        position:"absolute",
        width:30,
        height:31,
        transform:[{translateX:186},{translateY:9}]
    },
    contSup:{
        position:"absolute",
        width:50,
        height:50,
        left:0,
        right:"auto",
        top:0,
        bottom:"auto",
        backgroundColor:"rgba(0,0,0,1)"
    },
    supprimer:{
        position:"absolute",
        width:30,
        height:30,
        left:0,
        right:"auto",
        top:0,
        bottom:"auto"
    }
    
});

export { style }