// CartScreen.js
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const CartScreen = () => {
  // Giả lập dữ liệu giỏ hàng
  const cartItems = [
    { id: "1", name: "Coca Cola", quantity: 2, price: 15 },
    { id: "2", name: "7Up", quantity: 1, price: 10 },
    { id: "3", name: "Pepsi", quantity: 3, price: 12 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDetails}>
        Quantity: {item.quantity} | Price: {item.price}$
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemContainer: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 8,
  },
  itemName: {
    fontSize: 18,
  },
  itemDetails: {
    color: "#555",
  },
});

export default CartScreen;
