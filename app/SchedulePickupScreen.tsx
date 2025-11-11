import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SchedulePickupScreen() {
  const [selectedDate, setSelectedDate] = useState("11");
  const [selectedTime, setSelectedTime] = useState("11AM - 1PM");
  const [note, setNote] = useState("");

  const timeSlots = ["9AM - 11AM", "11AM - 1PM", "1PM - 3PM", "3PM - 5PM"];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}

      {/* Select a Date */}
      <Text style={styles.sectionTitle}>Select a Date</Text>
      <View style={styles.calendar}>
        <Text style={styles.monthText}>June 2024</Text>
        <View style={styles.datesRow}>
          {[5, 11, 17, 23].map((date) => (
            <TouchableOpacity
              key={date}
              style={[
                styles.dateCircle,
                selectedDate === String(date) && styles.activeDate,
              ]}
              onPress={() => setSelectedDate(String(date))}
            >
              <Text
                style={[
                  styles.dateText,
                  selectedDate === String(date) && styles.activeDateText,
                ]}
              >
                {date}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Choose a Time Slot */}
      <Text style={styles.sectionTitle}>Choose a Time Slot</Text>
      <View style={styles.timeRow}>
        {timeSlots.map((slot) => (
          <TouchableOpacity
            key={slot}
            style={[
              styles.timeSlot,
              selectedTime === slot && styles.activeTimeSlot,
            ]}
            onPress={() => setSelectedTime(slot)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === slot && styles.activeTimeText,
              ]}
            >
              {slot}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Pickup Address */}
      <Text style={styles.sectionTitle}>Pickup Address</Text>
      <View style={styles.addressBox}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="location-outline" size={22} color="#2E7D32" />
          <View style={{ marginLeft: 8 }}>
            <Text style={styles.addressTitle}>123 Green Earth Lane</Text>
            <Text style={styles.addressSub}>Eco City, GA 12345</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Note for Collector */}
      <Text style={styles.sectionTitle}>Add a Note for the Collector</Text>
      <TextInput
        style={styles.noteInput}
        placeholder="e.g., Leave the bins by the side gate."
        placeholderTextColor="#888"
        value={note}
        onChangeText={setNote}
        multiline
      />

      {/* Confirm Button */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirm Pickup</Text>
      </TouchableOpacity>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F9FAFB",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#222",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "#222",
  },
  calendar: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    elevation: 2,
  },
  monthText: {
    textAlign: "center",
    fontWeight: "600",
    color: "#444",
    marginBottom: 10,
  },
  datesRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dateCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E8F5E9",
  },
  activeDate: {
    backgroundColor: "#2E7D32",
  },
  dateText: {
    color: "#333",
    fontWeight: "500",
  },
  activeDateText: {
    color: "#fff",
  },
  timeRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  timeSlot: {
    backgroundColor: "#E8F5E9",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginVertical: 6,
    flexBasis: "48%",
    alignItems: "center",
  },
  activeTimeSlot: {
    backgroundColor: "#2E7D32",
  },
  timeText: {
    color: "#333",
    fontWeight: "500",
  },
  activeTimeText: {
    color: "#fff",
  },
  addressBox: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addressTitle: {
    fontWeight: "600",
    fontSize: 14,
  },
  addressSub: {
    fontSize: 12,
    color: "#666",
  },
  changeText: {
    color: "#2E7D32",
    fontWeight: "600",
  },
  noteInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    fontSize: 14,
    elevation: 2,
    textAlignVertical: "top",
    height: 100,
  },
  confirmButton: {
    backgroundColor: "#2E7D32",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    marginTop: 30,
  },
  confirmText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
