import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
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
  group9: {
    position: "absolute",
    width: 50,
    height: 50,
    transform: [{ translateX: 123 }, { translateY: 23 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)"
  },
  logo: {
    position: "absolute",
    width: 41,
    height: 41,
    borderRadius: 0,
    opacity: 1,
    left: 5,
    right: "auto",
    top: 4,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
  },

  qr_code_app: {
    position: "absolute",
    width: "auto",
    height: "auto",
    left: 228,
    right: "auto",
    top: 38,
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
  group10: {
    position: "absolute",
    width: 50,
    height: 50,
    transform: [{ translateX: 400 }, { translateY: 22 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)"
  },
  reglage: {
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
  Footer: {
    position: "absolute",
    width: 482,
    height: 110,
    transform: [{ translateX: -61 }, { translateY: 590 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)"
  },
  rectangle2: {
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
  Bouton_mise: {
    position: "absolute",
    width: 136,
    height: 37,
    transform: [{ translateX: 85 }, { translateY: 25 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)"
  },
  container_bouton: {
    position: "absolute",
    width: 136,
    height: 37,
    borderRadius: 25,
    opacity: 1,
    left: 0,
    right: "auto",
    top: 0,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,217,192,1)"
  },
  mettre_a_jour: {
    position: "absolute",
    width: "auto",
    height: "auto",
    left: 27,
    right: "auto",
    top: 10,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Roboto",
    fontWeight: "400",
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(255,255,243,1)",
    textAlign: "center",
    textAlignVertical: "center",
    letterSpacing: 0.1
  },
  Bouton_Annuler: {
    position: "absolute",
    width: 136,
    height: 37,
    transform: [{ translateX: 262 }, { translateY: 25 }, { rotate: "0deg" }],
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0)"
  },
  container_bouton2: {
    position: "absolute",
    width: 136,
    height: 37,
    borderRadius: 25,
    opacity: 1,
    left: 0,
    right: "auto",
    top: 0,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(255,67,101,1)"
  },
  Annuler: {
    position: "absolute",
    width: "auto",
    height: "auto",
    left: 43,
    right: "auto",
    top: 10,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    fontFamily: "Roboto",
    fontWeight: "400",
    textDecorationLine: "none",
    fontSize: 14,
    color: "rgba(255,255,243,1)",
    textAlign: "left",
    textAlignVertical: "top",
    letterSpacing: 0.1
  },
  QR_Code: {
    position: "absolute",
    width: 500,
    height: 800,
    borderRadius: 0,
    left: 0,
    right: "auto",
    top: 110,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: -100 }, { rotate: "0deg" }]
  }
});

export { styles }