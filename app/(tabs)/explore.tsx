import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const StartScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoWrapper}>
        <View style={styles.logoCircle}>
          <Image
            source={require("../../assets/images/logo.png")} // your logo here
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* App Name */}
      <Text style={styles.title}>!Waste</Text>

      {/* Tagline */}
      <Text style={styles.subtitle}>Transform Trash into Treasure</Text>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Let's get started</Text>
      </TouchableOpacity>

      {/* Account text */}
      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>I already have an account</Text>
        <View style={styles.arrowCircle}>
          <Text style={styles.arrow}>→</Text>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    marginBottom: 25,
    alignItems: "center",
  },
  logoCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  logo: {
  
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#000000",
    marginTop: 15,
  },
  subtitle: {
    fontSize: 16,
    color: "#555555",
    marginTop: 8,
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#00A651",
    width: "85%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },
  bottomText: {
    fontSize: 14,
    color: "#333333",
    marginRight: 8,
  },
  arrowCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#00A651",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
  color: "#FFFFFF",
  fontSize: 16,
  fontWeight: "bold",
  marginTop: -1, // optional tweak for optical centering
},
});
