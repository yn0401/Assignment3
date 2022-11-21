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
import { fetchAll,searchSneakerByNameFromFB } from "../redux/actions/sneaker";
import { useEffect } from "react";



function ListScreen({ navigation }) {
  const dispatch = useDispatch();
  const db = useSelector((store) => store.sneakers);
  

  const [text, onChangeText] = useState("");
  
  const search = (keyword) => {
    if(keyword != ""){
      dispatch(searchSneakerByNameFromFB(keyword));
    }else{
      dispatch(fetchAll());
    }
    
  }

  useEffect(() => {
    dispatch(fetchAll());
    console.log("db", db);
  }, []);

  const navigateAdd = (id) => {
    navigation.navigate("Add");
  };

  const navigate = (id) => {
    // console.log(id)
    navigation.navigate("Details",{
      id : id
    });
  };

  const ListItem = ({ item }) => {
    return (
      <TouchableOpacity  onPress={() => navigate(item.id)}>
        <View style={styles.item} key={item.id}>
          <Image style={styles.image} source={{ uri: item.url }} />
          <View style={styles.info}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.brand}>Brand: {item.brand}</Text>
            <Text style={styles.price}>Price: {item.price} VND</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Octicons name="search" size={24} color="#000" onPress={() => {search(text)}}/>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter Sneaker's Name"
          onChangeText={onChangeText}
          value={text}
        />
        <Octicons
          name="diff-added"
          size={24}
          color="#000"
          onPress={navigateAdd}
        />
      </View>

      <FlatList
       
        keyExtractor={(item) => item.id}
        data={db.sneakers}
        renderItem={ListItem}
      />

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
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    flexWrap: 'wrap'
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
