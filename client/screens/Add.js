import React, { useState } from "react";
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
import * as ImagePicker from "expo-image-picker";

import { useDispatch } from "react-redux";
import { addSneakerToFB } from "../redux/actions/sneaker";

import { firebase } from "../config/firebase";
import {
  getStorage,
  uploadString,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

const AddScreen = ({ params }) => {
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

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [size, setSize] = useState("");
  const [url, setUrl] = useState("");
  
  const addSneaker = () => {
    const sneaker = {
      name: name,
      brand: brand,
      price: price,
      description: description,
      stock: stock,
      size: size,
      url: url,
    };
    dispatch(addSneakerToFB(sneaker));
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Item</Text>
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
        <View
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <TextInput
            style={styles.InputText}
            placeholder="Name"
            // value={value}
            onChangeText={(nextValue) => setName(nextValue)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Brand"
            // value={value}
            onChangeText={(nextValue) => setBrand(nextValue)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Price"
            // value={value}
            onChangeText={(nextValue) => setPrice(nextValue)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Description"
            // value={value}
            onChangeText={(nextValue) => setDescription(nextValue)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Size"
            // value={value}
            onChangeText={(nextValue) => setSize(nextValue)}
          />
          <TextInput
            style={styles.InputText}
            placeholder="Stock"
            // value={value}
            onChangeText={(nextValue) => setStock(nextValue)}
          />
          <TouchableOpacity style={styles.button} onPress={() => addSneaker()}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default AddScreen;

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
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    marginBottom: 40,
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  btn: {
    marginTop: 20,
  },
  subTitle: {
    fontSize: 20,
  },
  InputText: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
});
