import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2972/2972185.png' }}
          style={styles.logo}
        />
        <Text style={styles.title}>♻️ Not Waste</Text>
        <Text style={styles.subtitle}>
          Turn your waste into value — for a cleaner, greener world!
        </Text>
      </View>

      {/* Cards */}
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1055/1055646.png' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Sell Your Waste</Text>
          <Text style={styles.cardText}>
            Post your recyclable items and get paid by buyers nearby.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Selling</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1995/1995526.png' }}
            style={styles.cardImage}
          />
          <Text style={styles.cardTitle}>Buy Recycled Items</Text>
          <Text style={styles.cardText}>
            Explore eco-friendly products made from recycled materials.
          </Text>
          <TouchableOpacity style={[styles.button, { backgroundColor: '#2E7D32' }]}>
            <Text style={styles.buttonText}>Explore Items</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* About Section */}
      <View style={styles.about}>
        <Text style={styles.aboutTitle}>Why Not Waste?</Text>
        <Text style={styles.aboutText}>
          We believe in giving waste a second life — connecting communities and
          businesses to recycle, reuse, and reduce environmental pollution.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F5E9',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#A5D6A7',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1B5E20',
  },
  subtitle: {
    fontSize: 16,
    color: '#2E7D32',
    textAlign: 'center',
    marginTop: 5,
  },
  cardsContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#C8E6C9',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 3,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginVertical: 10,
  },
  cardText: {
    textAlign: 'center',
    color: '#33691E',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  about: {
    backgroundColor: '#A5D6A7',
    margin: 16,
    borderRadius: 16,
    padding: 16,
  },
  aboutTitle: {
    color: '#1B5E20',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 8,
  },
  aboutText: {
    color: '#2E7D32',
    fontSize: 15,
  },
});
