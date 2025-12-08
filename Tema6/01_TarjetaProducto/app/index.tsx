import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TarjetaProducto } from "./components/TarjetaProducto";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  const productos = [
    { name: "Camiseta", price: 19.99, image: "https://www.hypefit.es/wp-content/uploads/2024/03/2G8A7721_1-scaled.jpg" },
    { name: "Pantalón", price: 39.99, image: "https://cdn.grupoelcorteingles.es/statics/manager/contents/images/uploads/2025/03/H1-jwm6c3Jg.jpeg?impolicy=Resize&width=800&height=800" },
    { name: "Zapatillas", price: 59.99, image: "https://media.revistagq.com/photos/6401c484c792b2decae2194e/4:3/w_3031,h_2273,c_limit/zapatillas%20retro%20homnbre.jpg" },
    { name: "Gorra", price: 14.99, image: "https://www.giftcampaign.es/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/p/f/pf38677440_yl.jpg" },
  ];

  return (
    <View style={styles.container}>
      {/* Header con carrito */}
      <View style={styles.header}>
        <Text style={styles.cart}>🛒 {cartCount}</Text>
      </View>

      {/* Lista de productos */}
      <ScrollView contentContainerStyle={styles.products}>
        {productos.map((producto, index) => (
          <TarjetaProducto
            key={index}
            name={producto.name}
            price={producto.price}
            image={producto.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  cart: {
    fontSize: 20,
    fontWeight: "bold",
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
