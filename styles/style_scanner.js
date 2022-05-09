import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column-reverse",
    justifyContent:"flex-start",
    alignItems:"center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    overflow: "hidden",
    backgroundColor: "rgba(1,1,1,1)"
  },
  Header: {
    width: Dimensions.get("window").width-50,
    height: 72,
    borderRadius:25,
    opacity:0.65,
    marginTop:50,
    flexDirection: "row",
    flexWrap:"wrap",
    justifyContent: 'space-between',
    backgroundColor:"rgba(255,255,255,0.65)"
  },
  liste_bouton:{
    width:50,
    height:50,
    margin: 10,
    overflow:"hidden",
    backgroundColor:"rgba(0,0,0,0)"
  },
  liste:{
    width:50,
    height:50,
    opacity:1
  },
  parametre_bouton:{
    width:50,
    height:50,
    margin: 10,
    overflow:"hidden",
    backgroundColor:"rgba(0,0,0,0)"
  },
  reglage:{
    width:50,
    height:50,
    opacity:1
  },
  qr_code_app: {
    alignSelf:"center",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 18,
    color: "rgba(1,1,1, 1)",
    letterSpacing: 0.1
  },
  modal:{
    flex:1,
    backgroundColor: "white",
    justifyContent:"center",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:25
  },
  scan_fait:{
    fontFamily:"Roboto",
    fontWeight:"700",
    fontSize: 36,
    color:"rgba(0,0,0,1)",
    letterSpacing:0.1,
    marginBottom:20,
  },
  image:{
    width:Dimensions.get("window").width-150,
    height:Dimensions.get("window").width-150,
    marginBottom:20,
  },
  group6:{
    width:Dimensions.get("window").width-150,
    height:62,
    borderRadius:25,
    backgroundColor:"rgba(21,203,203,1)",
    justifyContent:"center",
    marginBottom:20,
  },
  mise:{
    fontFamily:"Roboto",
    fontWeight:"400",
    fontSize:24,
    color:"rgba(0,0,0,1)",
    alignSelf:"center",
    letterSpacing:0.1
  }, 
  group20:{
    width:Dimensions.get("window").width-150,
    height:29,
    overflow:"hidden",
    justifyContent:"center",
    marginLeft:20
  },
  annuler:{
    fontFamily:"Roboto",
    fontWeight:"400",
    textDecorationLine:"none",
    fontSize:24,
    color:"rgba(21,203,203,1)",
    alignSelf:"center",
    letterSpacing:0.1
  },
  scan:{
    width: Dimensions.get("window").width-50,
    height: Dimensions.get("window").height-100,
  }
});

export { styles }