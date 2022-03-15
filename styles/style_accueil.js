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
fond: {
    position:"absolute",
    width:360,
    height:700,
    borderRadius: 0,
    opacity: 1,
    left: 0,
    right:"auto",
    top: 0,
    bottom:"auto",
    transform:[{translateX: 0},{translateY: 0},{rotate:"0deg"}],
    backgroundColor:"rgba(0,0,0,0)"
},
group1:{
    position:"absolute",
    width: 200,
    height: 325,
    transform:[{translateX:80},{translateY:217},{rotate:"0deg"}],
    overflow:"hidden",
    backgroundColor:"rgba(0,0,0,0)"
},
qr_code_image:{
    position:"absolute",
    width:200,
    height:200,
    borderRadius:0,
    opacity:1,
    left:0,
    right:"auto",
    top:0,
    bottom:"auto",
    transform:[{translateX:0},{translateY:0},{rotate:"0deg"}],
    backgroundColor:"rgba(0,0,0,0)"
}, 
qr_code:{
    position:"absolute",
    width:"auto",
    height:"auto",
    left:16,
    right:"auto",
    top:241,
    bottom: "auto",
    transform:[{translateX:0},{translateY:0},{rotate:"0deg"}],
    fontFamily:"Roboto",
    fontWeight:"400",
    textDecorationLine:"none",
    fontSize:48,
    color:"rgba(255,255,255,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
},
scanner:{
    position:"absolute",
    width:"auto",
    height:"auto",
    left:54,
    right:"auto",
    top:297,
    bottom:"auto",
    transform:[{translateX:0},{translateY:0},{rotate:"0deg"}],
    fontFamily:"Roboto",
    fontWeight:"400",
    textDecorationLine:"none",
    fontSize: 24,
    color:"rgba(255,255,255,1)",
    textAlign:"center",
    textAlignVertical:"top",
    letterSpacing:0.1
}
})

  export{style}