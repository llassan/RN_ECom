import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import Icon from "../../Helpers/icon_font";
import {
  Ionicons,
  AntDesign,
  MaterialIcons,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

const UserScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "lightgrey" }}>
      <ScrollView>
        {/* // Log in // Sign UP // */}
        <View style={styles.profileCard}>
          <View style={{ backgroundColor: "darkgrey", height: 100 }}></View>
          {/*Image */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                position: "absolute",
                height: 120,
                width: 110,
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 20,
              }}
            >
              <Image
                source={require("../../assets/profile.png")}
                style={styles.userImg}
              />
            </View>
          </View>
          <TouchableOpacity style={styles.logIn}>
            <Text style={{ color: "white" }}>LOG IN/SIGN UP</Text>
          </TouchableOpacity>
        </View>

        {/* // Orders // Insiders // */}
        <View style={{ backgroundColor: "#fff", marginTop: 5, padding: 5 }}>
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "center",
              // textAlign: "left",
            }}
          >
            <TouchableOpacity
              style={{
                padding: 10,
                paddingHorizontal: 10,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "grey",
                borderRadius: 2,
                width: "48%",
                margin: 5,
              }}
            >
              <AntDesign name="dropbox" size={25} />
              {/* <Icon name="box-check" size={50} color="#bf1313"/> */}
              <Text style={{ fontWeight: 600, marginLeft: 10 }}>
                Orders &nbsp; &gt;
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "grey",
                borderRadius: 2,
                width: "48%",
                margin: 5,
              }}
            >
              <MaterialCommunityIcons name="crown-outline" size={25} />

              <Text style={{ fontWeight: 600, marginLeft: 10 }}>Insider</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "grey",
                borderRadius: 2,
                width: "48%",
                margin: 5,
              }}
            >
              <Feather name="headphones" size={25} />
              <Text style={{ fontWeight: 600, marginLeft: 10 }}>
                Help Center
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "grey",
                borderRadius: 2,
                width: "48%",
                margin: 5,
              }}
            >
              <AntDesign name="dropbox" size={25} />
              <Text style={{ fontWeight: 600, marginLeft: 10 }}>Coupons</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* // Payments & Currencies // */}
        <View>
          <View style={{ backgroundColor: "#fff", marginTop: 2, padding: 15 }}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <MaterialIcons name="payments" size={25} />
              <Text style={{ marginLeft: 10, fontWeight: 600 }}>
                Payments & Currencies
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: "#fff", marginTop: 2, padding: 15 }}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Ionicons name="wallet-outline" size={25} />
              <Text style={{ marginLeft: 10, fontWeight: 600 }}>
                Earn & Redeem
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: "#fff", marginTop: 2, padding: 15 }}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <FontAwesome name="edit" size={25} />
              <Text style={{ marginLeft: 10, fontWeight: 600 }}>
                Manage Account
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: "#fff", marginTop: 2, padding: 15 }}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons name="bullseye-arrow" size={25} />
              <Text style={{ marginLeft: 10, fontWeight: 600 }}>
                Challenges
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: "#fff", marginTop: 2, padding: 15 }}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
              onPress={() => navigation.navigate("Wishlist")}
            >
              <AntDesign name="hearto" size={25} />
              <Text style={{ marginLeft: 10, fontWeight: 600 }}>Wishlist</Text>
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: "#fff", marginTop: 2, padding: 15 }}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <AntDesign name="setting" size={25} />
              <Text style={{ marginLeft: 10, fontWeight: 600 }}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* //FAQ's */}
        <View style={{ marginTop: 5 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              padding: 10,
              paddingHorizontal: 20,
            }}
          >
            <Text>FAQ's</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              padding: 10,
              paddingHorizontal: 20,
            }}
          >
            <Text>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              padding: 10,
              paddingHorizontal: 20,
            }}
          >
            <Text>Terms of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              padding: 10,
              paddingHorizontal: 20,
            }}
          >
            <Text>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        {/* //Logout */}
        <View style={{ backgroundColor: "#fff", marginBottom: 5 }}>
          <TouchableOpacity
            style={[styles.logIn, { marginLeft: "auto", marginRight: "auto" }]}
          >
            <Text style={{ color: "white" }}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  profileCard: {
    height: 180,
    backgroundColor: "#fff",
  },
  logIn: {
    marginTop: 20,
    marginLeft: 145,
    padding: 10,
    backgroundColor: "#FE0000",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    height: 40,
    // flexGrow: 2,
  },
  userImg: {
    height: 120,
    width: 110,
    borderWidth: 2,
    borderColor: "lightgrey",
    borderRadius: 6,
    // position: "absolute",
  },
});
