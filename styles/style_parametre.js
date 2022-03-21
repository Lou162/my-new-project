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
    width: 329,
    height: 50,
    transform: [{ translateX: 24 }, { translateY: 66 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)"
  },
  parametre: {
    position: "absolute",
    width: "auto",
    height: "auto",
    left: 94,
    right: "auto",
    top: 10,
    bottom: "auto",
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 24,
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    textAlignVertical: "top",
  },
  Group_6:{
    position:"absolute",
    width:50,
    height:50
  },
  bouton_retour: {
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius:15,
    left:0,
    right:"auto",
    top:0,
    bottom:"auto",
    backgroundColor: "rgba(229,229,229,0.75)"
  },
  fleche: {
    position: "absolute",
    width: 26,
    height: 26,
    borderRadius: 0,
    opacity: 1,
    left: 12,
    right: "auto",
    top: 12,
    bottom: "auto",
  },
  group_31:{
    position:"absolute",
    width:66,
    height:30,
    transform:[{translateX:263},{translateY:9}]
  },
  rectangle6:{
    position:"absolute",
    width:66,
    height:30,
    left:0,
    right:"auto",
    top:0,
    bottom:"auto"
  },
  confirm:{
    position:"absolute",
    width:"auto",
    height:"auto",
    left:3,
    right:"auto",
    top:7,
    bottom:"auto",
    fontFamily:"Roboto",
    fontWeight:"400",
    fontSize:14,
    color:"rgba(0,0,0,1)",
    textAlign:"center",
    textAlignVertical:"top"
  },
  container_modifier: {
    position: "absolute",
    width: 305,
    height: 48,
    transform: [{ translateX: 28 }, { translateY: 581 }],
  },
  bouton_modifier: {
    position: "absolute",
    width: 305,
    height: 48,
    borderRadius: 25,
    opacity: 1,
    left: 0,
    right: "auto",
    top: 0,
    bottom: "auto",
    backgroundColor: "rgba(21,203,203,1)"
  },
  modifier: {
    position: "absolute",
    width: "auto",
    height: "auto",
    left: 118,
    right: "auto",
    top: 14,
    bottom: "auto",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 18,
    color: "rgba(0,0,0,1)",
    textAlign: "center",
    textAlignVertical: "top",
    letterSpacing: 0.1
  },
  param:{
    position:"absolute",
    width:"auto",
    height:"auto",
    left:16,
    right:"auto",
    top:290,
    bottom:"auto",
    display:"flex",
    flexDirection:"column"
  },
  parametre_ip:{
    position:"relative",
    width:328,
    height:77,
    marginBottom:15
    
  },
  Ip:{
    position:"absolute",
    width:84,
    height:21,
    left:21,
    right:"auto",
    fontFamily:"Roboto",
    fontWeight:"500",
    fontSize:16,
    color:"rgba(0,0,0,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
  },
  input:{
    position:"absolute",
    width:"auto",
    height:51,
    borderRadius:15,
    opacity:1,
    borderWidth:2,
    borderColor:"rgba(0,0,0,1)",
    left:0,
    right:0,
    transform:[{translateX:0},{translateY:26},{rotate:"0deg"}],
    backgroundColor:"rgba(0,0,0,0)"
  },
  parametre_ip_2:{
    position:"relative",
    width:328,
    height:77,
    marginBottom:15
  },
  parametre_ip_3:{
    position:"relative",
    width:328,
    height:77,
    marginBottom:15
  },
  illustration:{
    position:"absolute",
    width:150,
    height:150,
    left:100,
    right:"auto",
    top:135,
    bottom:"auto"
  }
});

export { style }