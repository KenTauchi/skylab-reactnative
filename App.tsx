import { StatusBar } from "expo-status-bar";
import React, { FC, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Card,
  CardItem,
  Thumbnail,
} from "native-base";
import * as ImagePicker from "expo-image-picker";

import homeimg from "./assets/homeimg.png";
import AlbumScreen from "./src/screens/AlbumScreen";

const App: FC = () => {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);

    pickerResult.cancelled === true ? null : setSelectedImage(pickerResult.uri);
  };

  if (selectedImage !== null) {
    return (
      <NativeRouter>
        <Route component={AlbumScreen} />
      </NativeRouter>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Profesional retouching.</Text>
      <Text>Powered by A.I.</Text>
      <Card style={styles.imgContainer}>
        <CardItem cardBody style={{ borderRadius: 10 }}>
          <Image style={styles.img} source={homeimg} />
        </CardItem>
      </Card>
      <Text>Select a photo to start</Text>
      <StatusBar style="auto" />
      <Button block style={styles.button} onPress={openImagePickerAsync}>
        <Text style={styles.buttonText}>SELECT PHOTO</Text>
      </Button>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dfe3ee",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  imgContainer: {
    width: "100%",
    height: 400,
    borderRadius: 10,
  },
  img: {
    borderRadius: 10,
    height: 400,
    width: "100%",
    flex: 1,
  },
  button: {
    backgroundColor: "#BCD0F0",
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
  },
});
