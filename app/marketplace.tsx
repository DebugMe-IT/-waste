import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const demoProducts = [
  {
    id: "1",
    name: "Recycled Plastic Bottle",
    price: "$2",
    image: "https://media.istockphoto.com/id/157383990/photo/blue-plastic-garbage.jpg?s=2048x2048&w=is&k=20&c=gH8-GZ-LxrL5r__aeJH70QYUgx1TsjGdEhNB0p5AjcM=",
  },
  {
    id: "2",
    name: "Upcycled Metal Art",
    price: "$10",
    image: "https://images.unsplash.com/photo-1691430596542-19240cc2c038?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: "3",
    name: "Glass Jar Planter",
    price: "$5",
    image: "https://media.istockphoto.com/id/1280154279/photo/give-your-home-a-good-dose-of-greenery.jpg?s=2048x2048&w=is&k=20&c=p4VWmdH5zxt1_cOT8J5ldbgdb9bphrHoevdODT1aXJk=",
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
      {/* Post Product Input and Button */}
      <TextInput
        placeholder="Post your product..."
        value={newProduct}
        onChangeText={setNewProduct}
        style={styles.input}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddProduct}>
        <Text style={styles.addText}>Post Product</Text>
      </TouchableOpacity>

      {/* About !Waste button moved just below Post Product */}
      <TouchableOpacity
        style={[styles.addButton, { marginTop: 10, backgroundColor: "#0f9d58" }]}
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
    backgroundColor: "#E8F5E9", 
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#2E7D32",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1B5E20",
  },
  price: {
    fontSize: 14,
    color: "#388E3C",
    marginVertical: 6,
  },
  buyButton: {
    backgroundColor: "#43A047",
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignSelf: "flex-start",
    marginTop: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  buyText: {
    color: "#fff",
    fontWeight: "700",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 16,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  addButton: {
    backgroundColor: "#2E7D32",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  addText: {
    color: "#fff",
    fontWeight: "800",
    fontSize: 16,
  },
});
