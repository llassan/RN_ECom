import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Favourites from "../Favourites/Favourites";

const AppCard = ({ title, price, image, rating, items, onPress }) => {
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const CustomRatingBar = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        {maxRating.map((item) => {
          return (
            <AntDesign name={item < rating ? "star" : "staro"} size={20} color="orange" />
          );
        })}
      </View>
    );
  };
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Favourites product={items} />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: image }}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      <View style={styles.cardBody}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>₹{price}</Text>
        </View>
          <CustomRatingBar />
      </View>
    </TouchableOpacity>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  card: {
    width: "49%",
    backgroundColor: "white",
    paddingBottom: 10,
    marginHorizontal: 2,
    marginVertical: 2,
    // borderRadius: 10,
  },
  imageContainer: {
    height: 200,
  },
  cardBody: {
    padding: 10,
  },
  cardContent: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    flex: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
    right: -22,
  },
});
