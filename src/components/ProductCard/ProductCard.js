import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import {
  increment,
  decrement,
  applyOffer,
} from "../../features/cart/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { TextInput } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";

const ProductCard = ({ cartItem }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [offerApplied, setOfferApplied] = useState(false);
  const coupons = ["BESTDEAL", "GET20", "GET10"];
  const [text, setText] = useState("");
  const handleCouponApplied = () => {
    dispatch(applyOffer({ text, cartItem }));
    setOfferApplied(!offerApplied);
    setShowModal(!showModal);
    // switch (text) {
    //   case BESTDEAL:

    //     break;
    //   case GET20:

    //     break;
    //   case GET10:

    //     break;
    //   default:

    //     break;
    // }
  };
  return (
    <>
      <View style={styles.productCard}>
        <Image
          source={{ uri: cartItem.images[0] }}
          style={{ height: 150, width: 100 }}
        />

        <View
          style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
            marginLeft: 60,
          }}
        >
          {cartItem.cartQuantity <= 0 ? (
            <Button title="-" disabled />
          ) : (
            <Button title="-" onPress={() => dispatch(decrement(cartItem))} />
          )}
          <Text>{cartItem.cartQuantity}</Text>
          <Button title="+" onPress={() => dispatch(increment(cartItem))} />
        </View>
        <View style={styles.itemPrice}>
          <Text style={{ fontWeight: "bold" }}>
            ₹{cartItem.price * cartItem.cartQuantity}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 40,
            bottom: 20,
          }}
          onPress={() => setShowModal(!showModal)}
        >
          <Text style={{ color: "#17594A", fontWeight: 500 }}>
            {offerApplied && <Text>✅ &nbsp;&nbsp;</Text>}
            Apply Coupon
          </Text>
        </TouchableOpacity>
        {showModal && (
          <Modal
            animationType="slide"
            flexDirection="bottom"
            transparent={true}
            visible={showModal}
          >
            <KeyboardAvoidingView
              style={{
                flex: 1,
                justifyContent: "flex-end",
              }}
            >
              <View
                style={{
                  height: "50%",
                  backgroundColor: "white",
                  borderWidth: 1,
                  // borderBottomWidth: 0,
                  // borderTopWidth: 2,
                  // borderRightWidth: 2,
                  // borderLeftWidth: 2,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  borderColor: "black",
                  // elevation: 5
                }}
              >
                <View style={{ margin: 15, padding: 30, marginTop: 25 }}>
                  <TouchableOpacity
                    style={{ position: "absolute", right: 20 }}
                    onPress={() => setShowModal(false)}
                  >
                    <Entypo name="cross" size={25} />
                  </TouchableOpacity>
                  <Text style={{ fontSize: 20 }}>Enter Coupon Code :</Text>
                  <TextInput
                    style={{ marginTop: 30, backgroundColor: "white" }}
                    placeholder="Enter coupon code here"
                    keyboardType="name-phone-pad"
                    onChangeText={(xyz) => setText(xyz)}
                    value={text}
                    editable={!offerApplied}
                  />
                  <View style={{ marginTop: 30 }}>
                    <Button title="Apply" onPress={handleCouponApplied} />
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </Modal>
        )}
      </View>
    </>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 10,
    // marginBottom: 10,
    margin: 10,
  },
  emptyCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemPrice: {
    // borderWidth: 2,
    // marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    padding: 10,
  },
});
