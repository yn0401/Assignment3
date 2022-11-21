import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Octicons from "react-native-vector-icons/Octicons";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchAll } from "../redux/actions/sneaker";
import { useEffect } from "react";

const ListItem = ({ item }) => {
  return (
    <View style={styles.item} key={item.id}>
      <Image style={styles.image} source={{ uri: item.url }} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.brand}>Brand: {item.brand}</Text>
        <Text style={styles.price}>Price: {item.price} VND</Text>
      </View>
    </View>
  );
};

function ListScreen({navigation}) {
  const navigate = () => {
    navigation.navigate("Details");
  }
  const dispatch = useDispatch();
  const db = useSelector((store) => store.sneakers);
  console.log("db", db);

  useEffect(() => {
    dispatch(fetchAll());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Octicons name="search" size={24} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Sneaker's Name"
        />
      </View>
      <TouchableOpacity onPress={navigate}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={db.sneakers}
        renderItem={ListItem}
       
      />
      </TouchableOpacity>
     
    </View>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: "cover",
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  brand: {
    fontSize: 16,
    fontWeight: "600",
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  search: {
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    border: "1px solid #ccc",
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
  },
});
