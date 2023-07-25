import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppCard from "../components/AppCard/AppCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProduct } from "../features/product/productSlice";
import { data } from "../model/ProductModel";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);
  const categories = [
    { id: 1, value: "Mobile" },
    { id: 2, value: "Groceries" },
    { id: 3, value: "T Shirts" },
    { id: 4, value: "Watches" },
    { id: 5, value: "Flip Flops" },
    { id: 6, value: "Sandals" },
    { id: 7, value: "Boots" },
    { id: 8, value: "Innewears" },

    // {"Watches"},
    // "T Shirts",
    // "Flip Flops",
    // "Sandals",
    // "Boots",
    // "Innewears",
  ];
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://dummyjson.com/products");
      // console.log(response.data.products);
      setData(response.data.products);
      dispatch(setProduct);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const [color, setColor] = useState("Mobile");
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator animating={true} size="large" />
        <Text style={{ marginVertical: 10 }}>Loading Products</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ justifyContent: "space-between" }}>
      <View
        style={{
          backgroundColor: "white",
          // alignItems: "center",
          // justifyContent: "center",
        }}
      >
        <FlatList
          horizontal={true}
          data={categories}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                height: 80,
                width: 80,
                alignItems: "center",
                justifyContent: "center",
                margin: 5,
                backgroundColor: "#C5DFF8",
                borderRadius: 40,
                borderWidth: 2,
                marginBottom: 10,
                borderColor: item.value === color ? "#FF9EAA" : "lightgrey",
              }}
              onPress={() => {
                let category = item.value.replace(" ", "");
                setColor(item.value);
                console.log(category);
                navigation.navigate(category);
              }}
            >
              <Text>{item.value}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <FlatList
          numColumns={2}
          data={data}
          renderItem={({ item }) => (
            <AppCard
              title={item.title}
              price={item.price}
              image={item.thumbnail}
              rating={item.rating}
              items={item}
              onPress={() => navigation.navigate("Details", { product: item })}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    // flexDirection: "row"
    // flex: 1,
  },
});
