import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { useDispatch } from "react-redux";

import {
  getStorage,
  uploadString,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { updateSneakerToFB,fetchAll } from "../redux/actions/sneaker";

const UpdateScreen = ({ route, navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };

  const [selectedImage, setSelectedImage] = useState({
    localURI:
      "https://firebasestorage.googleapis.com/v0/b/assignment3-cb6a0.appspot.com/o/152474324_454991765858054_6815372736016710457_n.jpg?alt=media&token=6b6344f7-8db2-4ac1-99df-75c88d853d1e",
  });

  const openImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ base64: true });
    if (result.cancelled) return;
    // console.log(result);
    let uri = result.uri;
    setSelectedImage({ localURI: result.uri });

    if (Platform.OS == "web") {
      let base64code = result.base64;
      //upload
      await uploadBase64(base64code);
    } else {
      let uri = result.uri;
      console.log("uri", uri);
      //step 1 : convert to blob
      const blobFile = await convertURIToBlob(uri);
      //step 2 : upload to cloud
      await uploadFile(blobFile);
    }
  };

  const convertURIToBlob = async (uri) => {
    const response = await new Promise((resolve, reject) => {
      let xmlRequest = new XMLHttpRequest();
      xmlRequest.onload = function () {
        resolve(xmlRequest.response);
      };
      xmlRequest.onerror = function () {
        reject(new TypeError("Request failed"));
      };

      xmlRequest.responseType = "blob";
      xmlRequest.open("GET", uri, true);
      xmlRequest.send(null);
    });
    return response;
  };

  const uploadFile = async (blobFile) => {
    let imgName = "img-ios" + new Date().getTime();
    const storage = getStorage();
    const storageRef = ref(storage, `images/${imgName}.jpg`);
    const metadata = {
      contentType: "image/jpeg",
    };
    const uploadTask = uploadBytesResumable(storageRef, blobFile, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  const uploadBase64 = async (base64code) => {
    let imgName = "img-w" + new Date().getTime();
    //step 2
    const storage = getStorage();
    const storageRef = ref(storage, `images/${imgName}.jpg`);
    const metadata = {
      contentType: "image/jpeg",
    };
    uploadString(storageRef, base64code, "base64", metadata).then(
      (snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL);
        });
      }
    );
  };

  const dispatch = useDispatch();

  const item = route.params.item;
  const id = route.params.id;
  console.log("item", item);
  const [name, setName] = useState(item.name);
  const [brand, setBrand] = useState(item.brand);
  const [price, setPrice] = useState(item.price);
  const [description, setDescription] = useState(item.description);
  const [stock, setStock] = useState(item.stock);
  const [size, setSize] = useState(item.size);
  const [url, setUrl] = useState(item.url);

  const updateSneaker = () => {
    const sneaker = {
      id: id,
      name: name,
      brand: brand,
      price: price,
      description: description,
      stock: stock,
      size: size,
      url: url,
    };
    dispatch(updateSneakerToFB(sneaker));
    dispatch(fetchAll());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Item</Text>
      <Image
        style={styles.image}
        source={{
          uri: selectedImage.localURI,
        }}
      />
      <TouchableOpacity style={styles.button} onPress={openImage}>
        <Text style={styles.buttonText}>Pick Image</Text>
      </TouchableOpacity>
      <SafeAreaView>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TextInput
            style={styles.TextInput}
            placeholder="Name"
            value={name}
            onChangeText={(nextValue) => setName(nextValue)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Brand"
            value={brand}
            onChangeText={(nextValue) => setBrand(nextValue)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Price"
            value={price}
            onChangeText={(nextValue) => setPrice(nextValue)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Description"
            value={description}
            onChangeText={(nextValue) => setDescription(nextValue)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Size"
            value={size}
            onChangeText={(nextValue) => setSize(nextValue)}
          />
          <TextInput
            style={styles.TextInput}
            placeholder="Stock"
            value={stock}
            onChangeText={(nextValue) => setStock(nextValue)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateSneaker()}
          >
            <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200 / 2,
  },
  button: {
    backgroundColor: "#426ef0",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  TextInput: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  title: {
    marginBottom: 40,
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  button: {
    backgroundColor: "#426ef0",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: 150,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  card: {
    width: 300,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  subTitle: {
    fontSize: 20,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});
