import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <Text style={styles.title}>!Waste</Text>
      <Text style={styles.subtitle}>Transform Trash into Treasure</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Let’s get started</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginLinkContainer}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.linkText}>I already have an account</Text>
        <View style={styles.arrowCircle}>
          <Text style={styles.arrowText}>→</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9", 
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: "#1B5E20",
  },
  subtitle: {
    fontSize: 18,
    color: "#4B5563",
    marginVertical: 12,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#10B981",
    paddingVertical: 16,
    paddingHorizontal: 70,
    borderRadius: 35,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
  loginLinkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
  },
  linkText: {
    color: "#10B981",
    fontSize: 16,
    fontWeight: "500",
  },
  arrowCircle: {
    backgroundColor: "#10B981",
    borderRadius: 50,
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  arrowText: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
  },
});
