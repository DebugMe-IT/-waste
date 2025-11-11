import { FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function SegregationGuideScreen() {
  const [expanded, setExpanded] = useState("organic");
  const [activeTab, setActiveTab] = useState("Guide");

  const handleTabPress = (tabName, route) => {
    setActiveTab(tabName);
    if (route) router.push(route);
  };

  const toggleExpand = (type) => {
    setExpanded(expanded === type ? null : type);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={22}
          color="#000"
          onPress={() => router.back()}
        />
        <Text style={styles.headerText}>Segregation Guide</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="How to dispose of...?"
          placeholderTextColor="#999"
        />
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 120 }}>
        {/* Organic Waste */}
        <TouchableOpacity
          style={[styles.card, expanded === "organic" && styles.activeCardGreen]}
          onPress={() => toggleExpand("organic")}
        >
          <View style={styles.cardHeader}>
            <Ionicons name="leaf-outline" size={24} color="#2E7D32" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.cardTitleGreen}>Organic Waste</Text>
              <Text style={styles.cardSubtitle}>For all biodegradable waste.</Text>
            </View>
            <Ionicons
              name={expanded === "organic" ? "chevron-up" : "chevron-down"}
              size={22}
              color="#666"
              style={{ marginLeft: "auto" }}
            />
          </View>

          {expanded === "organic" && (
            <View style={styles.cardContent}>
              <Text style={styles.sectionTitle}>What it is</Text>
              <Text style={styles.sectionText}>
                Organic waste includes any material that is biodegradable and comes
                from a plant or an animal. It is important for composting, which
                enriches soil.
              </Text>

              <Text style={styles.sectionTitle}>Examples</Text>
              <View style={styles.exampleRow}>
                <View style={styles.exampleBox}>
                  <MaterialCommunityIcons name="food-fork-drink" size={20} color="#2E7D32" />
                  <Text style={styles.exampleText}>Food Scraps</Text>
                </View>
                <View style={styles.exampleBox}>
                  <FontAwesome5 name="egg" size={18} color="#2E7D32" />
                  <Text style={styles.exampleText}>Eggshells</Text>
                </View>
                <View style={styles.exampleBox}>
                  <Ionicons name="cafe-outline" size={20} color="#2E7D32" />
                  <Text style={styles.exampleText}>Coffee Grounds</Text>
                </View>
              </View>

              <Text style={styles.sectionTitle}>Do's & Don'ts</Text>
              <View style={styles.ruleRow}>
                <Ionicons name="checkmark-circle" size={18} color="#2E7D32" />
                <Text style={styles.ruleText}>Compost fruit and vegetable peels.</Text>
              </View>
              <View style={styles.ruleRow}>
                <Ionicons name="close-circle" size={18} color="red" />
                <Text style={styles.ruleText}>Do not include meat, oil, or dairy.</Text>
              </View>
            </View>
          )}
        </TouchableOpacity>

        {/* Recyclable Waste */}
        <TouchableOpacity
          style={[styles.card, expanded === "recyclable" && styles.activeCardBlue]}
          onPress={() => toggleExpand("recyclable")}
        >
          <View style={styles.cardHeader}>
            <Ionicons name="refresh-outline" size={24} color="#1565C0" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.cardTitleBlue}>Recyclable Waste</Text>
              <Text style={styles.cardSubtitle}>Items that can be reprocessed.</Text>
            </View>
            <Ionicons
              name={expanded === "recyclable" ? "chevron-up" : "chevron-down"}
              size={22}
              color="#666"
              style={{ marginLeft: "auto" }}
            />
          </View>
        </TouchableOpacity>

        {/* Hazardous Waste */}
        <TouchableOpacity
          style={[styles.card, expanded === "hazardous" && styles.activeCardRed]}
          onPress={() => toggleExpand("hazardous")}
        >
          <View style={styles.cardHeader}>
            <Ionicons name="alert-circle-outline" size={24} color="#C62828" />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.cardTitleRed}>Hazardous Waste</Text>
              <Text style={styles.cardSubtitle}>Unsafe for regular disposal.</Text>
            </View>
            <Ionicons
              name={expanded === "hazardous" ? "chevron-up" : "chevron-down"}
              size={22}
              color="#666"
              style={{ marginLeft: "auto" }}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => handleTabPress("Schedule", "/SchedulePickupScreen")}
      >
        <Ionicons name="add" size={22} color="#fff" />
        <Text style={styles.floatingText}>Schedule Pickup</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("Home", "/homeScreen")}
        >
          <Ionicons name="home-outline" size={22} color={activeTab === "Home" ? "#00E676" : "#666"} />
          <Text
            style={[
              styles.navText,
              { color: activeTab === "Home" ? "#00E676" : "#666" },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("Schedule", "/SchedulePickupScreen")}
        >
          <Ionicons
            name="calendar-outline"
            size={22}
            color={activeTab === "Schedule" ? "#00E676" : "#666"}
          />
          <Text
            style={[
              styles.navText,
              { color: activeTab === "Schedule" ? "#00E676" : "#666" },
            ]}
          >
            Schedule
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("Guide", "/SegregationGuideScreen")}
        >
          <Ionicons
            name="book-outline"
            size={22}
            color={activeTab === "Guide" ? "#00E676" : "#666"}
          />
          <Text
            style={[
              styles.navText,
              { color: activeTab === "Guide" ? "#00E676" : "#666" },
            ]}
          >
            Guide
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleTabPress("Profile", "/profile")}
        >
          <Ionicons
            name="person-outline"
            size={22}
            color={activeTab === "Profile" ? "#00E676" : "#666"}
          />
          <Text
            style={[
              styles.navText,
              { color: activeTab === "Profile" ? "#00E676" : "#666" },
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#F9FAFB",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
    color: "#000",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F3F4",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  searchInput: { flex: 1, fontSize: 14, marginLeft: 8 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  activeCardGreen: { borderWidth: 1, borderColor: "#2E7D32" },
  activeCardBlue: { borderWidth: 1, borderColor: "#1565C0" },
  activeCardRed: { borderWidth: 1, borderColor: "#C62828" },
  cardHeader: { flexDirection: "row", alignItems: "center" },
  cardTitleGreen: { fontSize: 16, fontWeight: "600", color: "#2E7D32" },
  cardTitleBlue: { fontSize: 16, fontWeight: "600", color: "#1565C0" },
  cardTitleRed: { fontSize: 16, fontWeight: "600", color: "#C62828" },
  cardSubtitle: { fontSize: 13, color: "#666" },
  cardContent: { marginTop: 15 },
  sectionTitle: { fontWeight: "600", marginTop: 10, color: "#000" },
  sectionText: { color: "#444", marginTop: 4, lineHeight: 18 },
  exampleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  exampleBox: {
    backgroundColor: "#F1F3F4",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 4,
  },
  exampleText: { fontSize: 12, color: "#2E7D32", marginTop: 5 },
  ruleRow: { flexDirection: "row", alignItems: "center", marginTop: 6 },
  ruleText: { marginLeft: 6, color: "#444" },
  floatingButton: {
    position: "absolute",
    bottom: 85,
    right: 20,
    backgroundColor: "#00E676",
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,
    elevation: 5,
  },
  floatingText: { color: "#fff", fontWeight: "600", marginLeft: 5 },
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
