import React, { FC, useState } from "react";
import { StyleSheet, Text } from "react-native";

import { NativeRouter, Route } from "react-router-native";
import { Button } from "native-base";
import * as ImagePicker from "expo-image-picker";

import AlbumScreen from "../screens/AlbumScreen";

const ImagePickerActivation: FC = () => {
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
    <Button block style={styles.button} onPress={openImagePickerAsync}>
      <Text style={styles.buttonText}>SELECT PHOTO</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#BCD0F0",
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
  },
});

export default ImagePickerActivation;
