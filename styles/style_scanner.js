import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: Dimensions.get("window").width,
    height: 800,
    borderRadius: 0,
    overflow: "hidden",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(1,1,1,1)",
    left: 0,
    top: 0
  },
  Header: {
    position: "absolute",
    width: 309,
    height: 72,
    transform: [{ translateX: 25 }, { translateY: 40 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)"
  },
  rectangle14:{
    position:"absolute",
    width:309,
    height:72,
    borderRadius:25,
    opacity:0.65,
    left:0,
    right:"auto",
    top:0,
    bottom:"auto",
    transform:[{translateX:0},{translateY:0},{rotate:"0deg"}],
    backgroundColor:"rgba(255,255,255,0.65)"
  },
  liste_bouton:{
    position:"absolute",
    width:50,
    height:50,
    transform:[{translateX:0},{translateY:11},{rotate:"0deg"}],
    overflow:"hidden",
    backgroundColor:"rgba(0,0,0,0)"
  },
  liste:{
    position:"absolute",
    width:50,
    height:50,
    borderRadius:0,
    opacity:1,
    left:0,
    right:"auto",
    top:0,
    bottom:"auto",
    transform:[{translateX:0},{translateY:0},{rotate:"0deg"}],
  },
  parametre_bouton:{
    position:"absolute",
    width:50,
    height:50,
    transform:[{translateX:259},{translateY:11},{rotate:"0deg"}],
    overflow:"hidden",
    backgroundColor:"rgba(0,0,0,0)"
  },
  reglage:{
    position:"absolute",
    width:50,
    height:50,
    borderRadius: 0,
    opacity:1,
    left:0,
    right:"auto",
    top:0,
    bottom:"auto",
    transform:[{translateX: 0},{translateY: 0},{rotate:"0deg"}]
  },
  qr_code_app: {
    position: "absolute",
    width: "auto",
    height: "auto",
    left: 100,
    right: "auto",
    top: 25,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Roboto",
    fontWeight: "400",
    textDecorationLine: "none",
    fontSize: 18,
    color: "rgba(1,1,1, 1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: 0.1
  },
  modal:{
    padding:25,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    borderTopLeftRadius:25,
    borderTopRightRadius:25
  },
  scan_fait:{
    position:"absolute",
    width:151,
    height:43,
    left:109,
    right:"auto",
    top:41,
    bottom:"auto",
    fontFamily:"Roboto",
    fontWeight:"700",
    textDecorationLine:"none",
    fontSize: 36,
    color:"rgba(0,0,0,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
  },
  image:{
    position:"absolute",
    width:190,
    height:190,
    borderRadius:0,
    opacity:1,
    left:90,
    right:"auto",
    top:128,
    bottom:"auto"
  },
  group6:{
    position:"absolute",
    width:178,
    height:62,
    borderRadius:25,
    transform:[{translateX:95},{translateY:350}],
    backgroundColor:"rgba(21,203,203,1)"
  },
  mise:{
    position:"absolute",
    width:165,
    height:29,
    left:5,
    right:"auto",
    top:16,
    bottom:"auto",
    fontFamily:"Roboto",
    fontWeight:"400",
    textDecorationLine:"none",
    fontSize:24,
    color:"rgba(0,0,0,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
  }, group20:{
    position:"absolute",
    width:116,
    height:29,
    transform:[{translateX:127},{translateY:446}],
    overflow:"hidden"
  },
  annuler:{
    position:"absolute",
    width:74,
    height:29,
    left:21,
    right:"auto",
    top:1,
    bottom:"auto",
    fontFamily:"Roboto",
    fontWeight:"400",
    textDecorationLine:"none",
    fontSize:24,
    color:"rgba(21,203,203,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
  }
});

export { styles }