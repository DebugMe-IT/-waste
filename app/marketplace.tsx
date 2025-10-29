import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useRouter } from "expo-router";

const demoProducts = [
  {
    id: "1",
    name: "Recycled Plastic Bottle",
    price: "$2",
    image: "https://images.unsplash.com/photo-1615485298772-40f4e8dcf3b7?w=200",
  },
  {
    id: "2",
    name: "Upcycled Metal Art",
    price: "$10",
    image: "https://images.unsplash.com/photo-1593032465173-0c358b7b34bb?w=200",
  },
  {
    id: "3",
    name: "Glass Jar Planter",
    price: "$5",
    image: "https://images.unsplash.com/photo-1585325701961-7a89c9e0c5c5?w=200",
  },
];

export default function Marketplace() {
  const [products, setProducts] = useState(demoProducts);
  const [newProduct, setNewProduct] = useState("");
  const router = useRouter();

  const handleAddProduct = () => {
    if (!newProduct) return;
    const newItem = {
      id: Math.random().toString(),
      name: newProduct,
      price: "$3",
      image: "https://images.unsplash.com/photo-1606813902773-4b518dc3b62b?w=200",
    };
    setProducts([...products, newItem]);
    setNewProduct("");
  };

  const handleBuy = (item: any) => {
    alert(`You bought ${item.name}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Marketplace</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.buyButton} onPress={() => handleBuy(item)}>
                <Text style={styles.buyText}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TextInput
        placeholder="Post your product..."
        value={newProduct}
        onChangeText={setNewProduct}
        style={styles.input}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.addText}>Post Product</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.addButton, { marginTop: 20, backgroundColor: "#0f9d58" }]}
        onPress={() => router.push("/about")}
        >
        <Text style={styles.addText}>About !Waste</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    color: "#26A65B",
    marginVertical: 4,
  },
  buyButton: {
    backgroundColor: "#26A65B",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
  },
  buyText: {
    color: "#fff",
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    padding: 12,
    marginTop: 20,
  },
  addButton: {
    backgroundColor: "#26A65B",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
  },
  addText: {
    color: "#fff",
    fontWeight: "600",
  },
});
