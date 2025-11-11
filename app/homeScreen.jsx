import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState("Home"); 

  const handleTabPress = (tabName, route) => {
    setActiveTab(tabName);
    if (route) router.push(route);
  };

  return (
    <View style={styles.container}>
      {/* ✅ Header */}
      <View style={styles.header}>
        <View style={styles.profileRow}>
          <Image
            source={{ uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" }}
            style={styles.avatar}
          />
          <Text style={styles.greeting}>Hello, Tanvir!</Text>
        </View>
        <Ionicons name="notifications-outline" size={26} color="#333" />
      </View>

      {/* ✅ Scrollable Body */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Stats Section */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Ionicons name="leaf-outline" size={24} color="#2E7D32" />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Trees Saved</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="star-outline" size={24} color="#2E7D32" />
            <Text style={styles.statValue}>85%</Text>
            <Text style={styles.statLabel}>Recycling Score</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="cloud-outline" size={24} color="#2E7D32" />
            <Text style={styles.statValue}>50 kg</Text>
            <Text style={styles.statLabel}>CO₂ Reduced</Text>
          </View>
        </View>

        {/* Eco Marketplace */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1737180621286-c2250ccce178?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Eco Marketplace</Text>
          <Text style={styles.subText}>Trade or give away reusable items</Text>
          <TouchableOpacity onPress={() => handleTabPress("Marketplace", "/marketplace")} style={styles.greenOutlineButton}>
            <Text style={styles.outlineText}>Browse Items</Text>
          </TouchableOpacity>
        </View>

        {/* Schedule Pickup */}
        <View style={styles.card}>
          <Image
            source={{ uri: "https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074" }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Schedule a Pickup</Text>
          <Text style={styles.subText}>Next pickup: Oct 28, 2024</Text>
          <TouchableOpacity style={styles.greenButton} onPress={() => handleTabPress("Schedule","/SchedulePickupScreen")}>
            <Text style={styles.btnText} >Schedule Now</Text>
          </TouchableOpacity>
        </View>

        {/* Recycle Right */}
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Recycle Right</Text>
          <Text style={styles.subText}>Learn how to segregate your waste</Text>
          <TouchableOpacity style={styles.blueButton} onPress={() => handleTabPress("Guide", "/SegregationGuideScreen")}>
            <Text style={styles.btnText}>View Guide</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ✅ Fixed Bottom Navbar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("Home", "/homeScreen")}
        >
          <Ionicons name="home-outline" size={22} color={activeTab === "Home" ? "#00E676" : "#000"} />
          <Text style={[styles.navText, { color: activeTab === "Home" ? "#00E676" : "#555" }]}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("Marketplace", "/marketplace")}
        >
          <Ionicons name="storefront-outline" size={22} color={activeTab === "Marketplace" ? "#00E676" : "#000"} />
          <Text style={[styles.navText, { color: activeTab === "Marketplace" ? "#00E676" : "#555" }]}>Marketplace</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("Schedule","/SchedulePickupScreen")}
        >
          <Ionicons name="calendar-outline" size={22} color={activeTab === "Schedule" ? "#00E676" : "#000"} />
          <Text style={[styles.navText, { color: activeTab === "Schedule" ? "#00E676" : "#555" }]}>Schedule</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("Profile", "/profile")}
        >
          <Ionicons name="person-outline" size={22} color={activeTab === "Profile" ? "#00E676" : "#000"} />
          <Text style={[styles.navText, { color: activeTab === "Profile" ? "#00E676" : "#555" }]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6F8",
    paddingTop: 10,
    paddingHorizontal: 18,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
  },

  /* STATS */
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  statBox: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 14,
    marginHorizontal: 5,
    borderRadius: 12,
    elevation: 3,
  },
  statValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2E7D32",
    marginTop: 4,
  },
  statLabel: {
    fontSize: 12,
    color: "#777",
    marginTop: 2,
  },

  /* CARD STYLES */
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },
  subText: {
    color: "#666",
    marginBottom: 10,
  },

  /* BUTTONS */
  greenButton: {
    backgroundColor: "#2E7D32",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  blueButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  greenOutlineButton: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#2E7D32",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "700",
  },
  outlineText: {
    color: "#2E7D32",
    fontWeight: "700",
  },

  /* NAVBAR */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: { alignItems: "center" },
  navText: { fontSize: 12, marginTop: 3, color: "#555" },
});
