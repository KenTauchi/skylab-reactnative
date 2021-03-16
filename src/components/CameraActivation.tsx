import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, Button } from "native-base";
import * as ImagePicker from "expo-image-picker";

const CameraActivation: FC = () => {
  //   const [activateCamera, setActivateCamera] = useState<null | boolean>(false);
  //   const [type, setType] = useState<string>(Camera.Constants.Type.back);
  //   const [image, setImage] = useState<null | string>(null);

  let openCamera = async () => {
    let permissionResult = await ImagePicker.getCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let cameraResult = await ImagePicker.launchCameraAsync();
    console.log(cameraResult);

    // cameraResult.cancelled === true ? null : setImage(cameraResult.uri);
  };

  return (
    <Button style={styles.iconContainer} onPress={openCamera}>
      <Icon
        type="MaterialCommunityIcons"
        name="camera-plus-outline"
        style={styles.icon}
      />
    </Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  iconContainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  icon: {
    fontSize: 32,
  },
});

export default CameraActivation;
