import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Image } from "react-native";
import Favourites from "../components/Favourites/Favourites";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  increment,
  incrementItem,
  itemAdded,
  productAdded,
} from "../features/cart/cartSlice";

const TODOSLIDER_WIDTH = Dimensions.get("window").width;
const TODOITEM_WIDTH = Math.round(TODOSLIDER_WIDTH);

const DetailsScreen = ({ navigation, route }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const isCarousel = React.useRef(null);
  const { product } = route.params;
  // const isSaved = products.filter((item) => item.id === product.id);
  // console.log("Product", product);
  // console.log("Is Saved", isSaved);

  const originalPrice =
    (Math.ceil(product.discountPercentage) / 100) * product.price +
    product.price;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Favourites product={product} />
        <Carousel
          layout="default"
          ref={isCarousel}
          data={product.images}
          renderItem={renderData}
          sliderWidth={TODOSLIDER_WIDTH}
          itemWidth={TODOITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
        />
      </View>
      <View style={{ height: "10%" }}>
        <Pagination
          dotsLength={product.images.length}
          activeDotIndex={index}
          carouselRef={isCarousel}
          dotStyle={{
            // width: 10,
            // height: 10,
            // borderRadius: 10,
            // marginHorizontal: 2,
            backgroundColor: "black",
          }}
        />
      </View>
      <View style={styles.mrpContainer}>
        <Text style={styles.description}>{product.description}</Text>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <Text style={{ marginRight: 5, opacity: 0.6 }}>MRP</Text>
          <Text
            style={{
              marginRight: 5,
              textDecorationLine: "line-through",
              textDecorationStyle: "solid",
              opacity: 0.6,
            }}
          >
            {Math.ceil(originalPrice)}
          </Text>
          <Text style={{ fontWeight: "bold", marginRight: 5 }}>
            ₹{product.price}
          </Text>
          <Text style={{ color: "red", fontWeight: "400" }}>
            ({Math.ceil(product.discountPercentage)}%OFF)
          </Text>
        </View>
      </View>
      <View style={styles.actionButton}>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: "grey",
            padding: 10,
            width: "46%",
          }}
          // onPress={() => (!isSaved ? add(product) : remove(product))}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ left: 50, top: -16 }}>
              <Favourites product={product} size={20} />
            </View>
            <Text style={{ marginLeft: 50, fontWeight: "500" }}>WISHLIST</Text>
          </View>
        </TouchableOpacity>
        {cartItems.findIndex((item) => item.id == product.id) >= 0 ? (
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: "grey",
              padding: 10,
              width: "46%",
              backgroundColor: "red",
            }}
            onPress={() => navigation.navigate("Cart")}
          >
            <View style={{ left: 15, flexDirection: "row" }}>
              <AntDesign
                name="shoppingcart"
                size={20}
                style={{ color: "white" }}
              />
              <Text
                style={{ marginLeft: 15, fontWeight: "500", color: "white" }}
              >
                GO TO CART
              </Text>
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              borderWidth: 0.5,
              borderColor: "grey",
              padding: 10,
              width: "46%",
              backgroundColor: "red",
            }}
            onPress={() => dispatch(addToCart(product))}
          >
            <View style={{ left: 15, flexDirection: "row" }}>
              <SimpleLineIcons
                name="handbag"
                size={20}
                style={{ color: "white" }}
              />
              <Text
                style={{ marginLeft: 15, fontWeight: "500", color: "white" }}
              >
                ADD TO BAG
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

function renderData({ item, index }) {
  // console.log("Brand", item);
  return (
    <View style={styles.imgContainer}>
      <Image source={{ uri: item }} style={styles.img} />
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: "#fff",
  },
  imgContainer: {
    // width: "100%",
    // height: "100%",
    // backgroundColor: "red",
  },
  img: {
    height: "100%",
    width: "100%",
    // objectFit: 'cover'
  },
  mrpContainer: {
    marginLeft: 15,
    justifyContent: "center",
  },
  description: {
    // fontSize: 18,
    textTransform: "capitalize",
  },
  actionButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
});
