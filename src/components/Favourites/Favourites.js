import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../features/favourite/favouriteSlice";

const Favourites = ({ product, size = 30 }) => {
  const isFavourite = useSelector((state) => state.favourite.isFavourite);
  const dispatch = useDispatch();
  // const add = (product) => {
  //   console.log("Add Fav");
  // }
  // const remove = (product) => {
  //   console.log("Remove Fav");
  //   const newFavs = isFavourite.filter((item) => item.id != product.id)
  //   setIsFavourite(newFavs)
  // }

  const isSaved = isFavourite.find((e) => e.id === product.id);

  return (
    <TouchableOpacity
      style={styles.fav}
      onPress={() =>
        !isSaved ? dispatch(add(product)) : dispatch(remove(product))
      }
    >
      <AntDesign
        size={size}
        name={!isSaved ? "hearto" : "heart"}
        color={!isSaved ? "grey" : "red"}
      />
    </TouchableOpacity>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  fav: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 100,
  },
});
