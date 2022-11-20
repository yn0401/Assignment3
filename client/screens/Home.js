import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

const HomeScreen = ({ navigation }) => {
  const navigateList = () => {
    navigation.navigate("List");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>God Valley Of Sneakers</Text>
        </View>
        <View style={styles.main}>
          <Image
            style={styles.imageLogo}
            source={require("../assets/sneaker.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
            marginTop: 36,
          }}
        >
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            THƯƠNG HIỆU
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            - CHẤT LƯỢNG -
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 5 }}
        >
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            UY TÍN HÀNG ĐẦU
          </Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={navigateList} style={styles.btn}>
            <Text style={styles.btnText}>VIEW MORE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#fff",
    maxWidth: 384,
    height: 300,
    padding: 30,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 45,
    textAlign: "left",
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageLogo: {
    width: 400,
    height: 400,
    resizeMode: "contain",
  },
  footer: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#222b45",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: 150,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});
