import { StatusBar } from "expo-status-bar";
import React, { FC, useState, useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { H1, H3 } from "native-base";
import { NativeRouter, Route, Link } from "react-router-native";
import { Button, Card, CardItem } from "native-base";
import * as ImagePicker from "expo-image-picker";

import homeimg from "../../assets/homeimg.png";
import AlbumScreen from "./AlbumScreen";

import ImagePickerActivation from "../components/ImagePickerActivation";

const HomeScreen: FC = () => {
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
      <H1>Profesional retouching.</H1>
      <H1>Powered by A.I.</H1>
      <Card style={styles.imgContainer}>
        <CardItem cardBody style={{ borderRadius: 10 }}>
          <Image style={styles.img} source={homeimg} />
        </CardItem>
      </Card>
      <H3>Select a photo to start</H3>
      {/* <StatusBar style="auto" /> */}
      <Button block style={styles.button} onPress={openImagePickerAsync}>
        <Text style={styles.buttonText}>SELECT PHOTO</Text>
      </Button>
      {/* <ImagePickerActivation /> */}
    </View>
  );
};

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

export default HomeScreen;
