// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function Profile() {
//   const router = useRouter();

//   return (
//     <View style={styles.container}>
//       <Image source={require('../assets/logo.png')} style={styles.avatar} />
//       <Text style={styles.name}>John Doe</Text>
//       <Text style={styles.email}>john@example.com</Text>

//       <TouchableOpacity style={styles.button} onPress={() => router.push('/settings')}>
//         <Text style={styles.buttonText}>Settings</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.logout} onPress={() => router.push('/login')}>
//         <Text style={styles.logoutText}>Log Out</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
//   avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
//   name: { fontSize: 26, fontWeight: 'bold', color: '#000' },
//   email: { fontSize: 16, color: '#555', marginBottom: 30 },
//   button: {
//     backgroundColor: '#00A651',
//     paddingVertical: 14,
//     paddingHorizontal: 60,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
//   logout: { marginTop: 10 },
//   logoutText: { color: '#00A651', fontSize: 14 },
// });




import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://i.pravatar.cc/200" }} style={styles.avatar} />
      <Text style={styles.name}>John Doe</Text>
      <Text style={styles.email}>john@example.com</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("/marketplace")}>
        <Text style={styles.buttonText}>Go to Marketplace</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.settingsButton]} onPress={() => router.push("/settings")}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.logout}>Logout</Text>
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
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#10b981",
  },
  name: {
    fontSize: 26,
    fontWeight: "800",
    color: "#1B5E20",
  },
  email: {
    fontSize: 16,
    color: "#4B5563",
    marginBottom: 30,
  },
  button: {
    width: "80%",
    backgroundColor: "#10b981",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  settingsButton: {
    backgroundColor: "#047857", 
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  logout: {
    color: "#EF4444", 
    marginTop: 20,
    fontWeight: "600",
    fontSize: 16,
  },
});
