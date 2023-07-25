import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native";
import { StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, clearCart } from "../features/cart/cartSlice";
import ProductCard from "../components/ProductCard/ProductCard";
import LottieView from "lottie-react-native";

const CartScreen = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [showAnimation, setShowAnimation] = useState(false);
  const animation = useRef(null);
  let price = 0;
  cartItems.map((item) => {
    console.log("Item -->", item);
    price += item.price * item.cartQuantity;
    // console.log("Price -->", price);
    // price = item.price * item.cartQuantity + totalPrice;
    // setTotalPrice(price);
    // setTotalPrice(price);
  });

  const emptyCart = () => {
    animation.current?.stop();
    dispatch(clearCart());
  };

  if (showAnimation) {
    setTimeout(() => {
      console.log("Set timeout");
      setShowAnimation(false);
      emptyCart();
    }, 2000);
    console.log("Anime");
    animation.current?.play();
    return (
      <View style={styles.activityIndicator}>
        {/* <ActivityIndicator animating={true} size="large" />
        <Text style={{ marginVertical: 10 }}>Placing Order</Text> */}
        <LottieView
          source={require("../../assets/animation_lk28muou.json")}
          ref={animation}
          style={{
            width: 150,
            height: 150,
            backgroundColor: "#eee",
          }}
          autoPlay
          loop={false}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            // console.log("Cart", cartItem)
            <ProductCard cartItem={cartItem} />
          ))
        ) : (
          <View style={styles.emptyCard}>
            <Text style={{ fontStyle: "italic" }}> That's all Folks!</Text>
          </View>
        )}
      </ScrollView>
      {cartItems.length > 0 ? (
        <View style={styles.bottom}>
          <TouchableOpacity style={styles.totalPrice} disabled>
            <Text style={{ fontSize: 17 }}>Total:&nbsp;&nbsp; ₹{price}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.placeOrder}
            onPress={() => setShowAnimation(true)}
          >
            <Text style={{ color: "white", fontSize: 17 }}>Place Order</Text>
          </TouchableOpacity>
        </View>
      ) : (
        ""
      )}
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "blue",
  },
  scroll: {
    // height: Dimensions.get("window").height,
    // borderWidth: 2,
    // borderColor: "red",
    flex: 1,
  },
  productCard: {
    // height: "20%",
    // backgroundColor: "lightgrey",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
    marginBottom: 10,
  },
  emptyCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    flexDirection: "row",
    // gap: 20,
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20,
    margin: 10,
  },
  totalPrice: {
    borderWidth: 1,
    width: "48%",
    padding: 15,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  placeOrder: {
    borderWidth: 1,
    width: "48%",
    padding: 15,
    backgroundColor: "#FE0000",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
