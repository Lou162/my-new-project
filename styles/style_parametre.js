import { StyleSheet, Dimensions } from 'react-native';

const style = StyleSheet.create({
  container: {
    flex:1,
    overflow: "hidden",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Header: {
    width: Dimensions.get("window").width-50,
    height: 50,
    overflow: "hidden",
    marginTop: 20,
    flexDirection:"row",
    justifyContent:"space-around",

  },
  parametre: {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: 24,
    color: "rgba(0,0,0,1)",
    alignSelf:"center"
  },
  Group_6:{
    width:50,
    height:50,
    justifyContent:"center"
  },
  bouton_retour: {
    width: 50,
    height: 50,
    borderRadius:15,
    backgroundColor: "rgba(229,229,229,0.75)",
    justifyContent:"center"
  },
  fleche: {
    width: 26,
    height: 26,
    alignSelf:"center",
  },
  group_31:{
    width:66,
    height:30,
  },
  rectangle6:{
    marginTop:20,
    width:66,
    height:30,
    alignItems:"center"
  },
  confirm:{ 
    fontFamily:"Roboto",
    fontWeight:"400",
    fontSize:14,
    color:"rgba(0,0,0,1)",
  },
  container_modifier: {
    width: Dimensions.get("window").width-100,
    height: 48,
  },
  bouton_modifier: {
    width: Dimensions.get("window").width-100,
    height: 48,
    borderRadius: 25,
    opacity: 1,
    backgroundColor: "rgba(21,203,203,1)",
    justifyContent:"center",
    alignItems:"center"
  },
  modifier: {
    width: "auto",
    height: "auto",
    fontFamily: "Roboto",
    fontWeight: "500",
    fontSize: 18,
    color: "rgba(0,0,0,1)",
    letterSpacing: 0.1
  },
  param:{
    width:"auto",
    height:"auto",
    flexDirection:"column"
  },
  parametre_ip:{
    width:Dimensions.get("window").width-35,
    height:77,
    marginBottom:15
    
  },
  Ip:{
    width:84,
    height:21,
    fontFamily:"Roboto",
    fontWeight:"500",
    fontSize:16,
    color:"rgba(0,0,0,1)",
    letterSpacing:0.1
  },
  input:{
    width:"auto",
    height:51,
    borderRadius:15,
    opacity:1,
    borderWidth:2,
    borderColor:"rgba(0,0,0,1)",
  },
  parametre_ip_2:{
    width:Dimensions.get("window").width-35,
    height:77,
    marginBottom:15
  },
  parametre_ip_3:{
    width:Dimensions.get("window").width-35,
    height:77,
    marginBottom:15
  },
  illustration:{
    width:Dimensions.get("window").width-225,
    height:Dimensions.get("window").width-225
  }
});

export { style }