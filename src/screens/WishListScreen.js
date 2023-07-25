import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import { SimpleLineIcons, AntDesign, Entypo } from "@expo/vector-icons";
import { addToCart } from "../features/cart/cartSlice";
import { remove } from "../features/favourite/favouriteSlice";

const WishListScreen = () => {
  const isFavourite = useSelector((state) => state.favourite.isFavourite);
  const dispatch = useDispatch();
  return (
    <ScrollView>
      {isFavourite.map((favourite) => (
        <View key={favourite.id}>
          <View
            style={{
              padding: 10,
              backgroundColor: "#fff",
              marginTop: 5,
              marginHorizontal: 5,
              flexDirection: "row",
            }}
          >
            <Image
              source={{ uri: favourite.thumbnail }}
              style={{ height: 100, width: 100 }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text>{favourite.title}</Text>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Text style={{ marginRight: 5, opacity: 0.6 }}>MRP</Text>
                <Text
                  style={{
                    marginRight: 5,
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                    opacity: 0.6,
                  }}
                >
                  {Math.ceil(
                    (Math.ceil(favourite.discountPercentage) / 100) *
                      favourite.price +
                      favourite.price
                  )}
                </Text>
                <Text style={{ fontWeight: "bold", marginRight: 5 }}>
                  ₹{favourite.price}
                </Text>
                <Text style={{ color: "red", fontWeight: "400" }}>
                  ({Math.ceil(favourite.discountPercentage)}%OFF)
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  borderWidth: 0.5,
                  borderColor: "grey",
                  padding: 5,
                  // width: "46%",
                  backgroundColor: "red",
                  marginTop: 10,
                }}
                onPress={() => dispatch(addToCart(favourite))}
              >
                <View style={{ flexDirection: "row" }}>
                  <SimpleLineIcons
                    name="handbag"
                    size={15}
                    style={{ color: "white", marginLeft: 15 }}
                  />
                  <Text
                    style={{
                      marginLeft: 15,
                      fontWeight: "400",
                      color: "white",
                    }}
                  >
                    ADD TO BAG
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                position: "absolute",
                right: 10,
                top: 10,
              }}
              onPress={() => dispatch(remove(favourite))}
            >
              <Entypo name="cross" size={25} />
            </TouchableOpacity>
          </View>
        </View>
      ))}
      {/* <Text>WishList</Text> */}
    </ScrollView>
  );
};

export default WishListScreen;
