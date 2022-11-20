import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import Octicons from "react-native-vector-icons/Octicons";

const ListScreen = () => {
  const list = [
    {
      id: 1,
      name: "Nike Air Force 1",
      price: 100,
      image:
        "http://saigonsneakerstore.com/thumbs/1080x720x2/upload/product/1-2293.jpg",
    },
    {
      id: 2,
      name: "Nike Air Force 2",
      price: 200,
      image:
        "http://saigonsneakerstore.com/thumbs/1080x720x2/upload/product/1-2293.jpg",
    },
    {
      id: 3,
      name: "Nike Air Force 3",
      price: 300,
      image:
        "http://saigonsneakerstore.com/thumbs/1080x720x2/upload/product/1-2293.jpg",
    },
  ];

  return (
    //List items
    <View style={styles.container}>
      <View style={styles.search}>
        <Octicons name="search" size={24} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Sneaker's Name"
        />
      </View>
      {list.map((item) => (
        <View style={styles.item} key={item.id}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} VND</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

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
