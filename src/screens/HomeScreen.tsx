import { StatusBar } from "expo-status-bar";
import React, { FC, useState, useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { H1, H3 } from "native-base";
import { NativeRouter, Route, BackButton } from "react-router-native";
import {
  Button,
  Card,
  CardItem,
  Container,
  Header,
  Content,
} from "native-base";
import * as ImagePicker from "expo-image-picker";

import homeimg from "../../assets/homeimg.png";
import AlbumScreen from "./AlbumScreen";

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
      <H1 style={styles.title}>Profesional retouching.</H1>
      <H1 style={styles.secondTitle}>Powered by A.I.</H1>

      <Card style={styles.imgContainer}>
        <CardItem cardBody style={{ borderRadius: 10 }}>
          <Image style={styles.img} source={homeimg} />
        </CardItem>
      </Card>

      <Text style={styles.description}>Select a photo to start</Text>
      <Button block style={styles.button} onPress={openImagePickerAsync}>
        <Text style={styles.buttonText}>SELECT PHOTO</Text>
      </Button>
      <View style={styles.agreementContainer}>
        <Text style={styles.agreementText}>
          by selecting a photo you agree to our
        </Text>
        <Text style={styles.agreementBoldText}>Terms of Service</Text>
        <Text style={styles.agreementText}>and</Text>
        <Text style={styles.agreementBoldText}>Privacy Policy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d7de",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },
  title: { fontWeight: "bold", alignSelf: "flex-start" },
  secondTitle: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 15,
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
  description: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "#b5c2e8",
    borderRadius: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  agreementContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    bottom: 20,
  },
  agreementText: {
    fontSize: 8,
  },
  agreementBoldText: {
    fontWeight: "bold",
    fontSize: 8,
  },
});

export default HomeScreen;
