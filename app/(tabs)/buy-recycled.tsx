import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BuyRecycledScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🛒 Buy Recycled Items</Text>
      <Text style={styles.subtitle}>
        Explore eco-friendly products made from recycled materials.
      </Text>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/616/616408.png' }}
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Recycled Paper Notebook</Text>
        <Text style={styles.cardText}>Eco-friendly notebook made from 100% recycled paper.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/420/420203.png' }}
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Reusable Plastic Bottle</Text>
        <Text style={styles.cardText}>Durable bottle made from recycled plastic.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png' }}
          style={styles.image}
        />
        <Text style={styles.cardTitle}>Metal Can Organizer</Text>
        <Text style={styles.cardText}>Organizer made from recycled metal cans.</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8F5E9', padding: 16 },
  title: { fontSize: 28, fontWeight: '700', color: '#1B5E20', marginBottom: 8, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#2E7D32', marginBottom: 16, textAlign: 'center' },
  card: { backgroundColor: '#C8E6C9', borderRadius: 16, padding: 16, marginBottom: 16, elevation: 2 },
  image: { width: 80, height: 80, marginBottom: 8, alignSelf: 'center' },
  cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#1B5E20', marginBottom: 4 },
  cardText: { color: '#33691E', marginBottom: 8, textAlign: 'center' },
  button: { backgroundColor: '#4CAF50', paddingVertical: 10, borderRadius: 20, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: '600' },
});
