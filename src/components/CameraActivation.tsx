import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, Button } from "native-base";
import * as ImagePicker from "expo-image-picker";

const CameraActivation: FC = () => {
  const openCamera = async () => {
    const permissionResult = await ImagePicker.getCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    ImagePicker.launchCameraAsync();
  };

  return (
    <Button style={styles.iconContainer} onPress={openCamera}>
      <Icon
        type="MaterialCommunityIcons"
        name="camera-plus"
        style={styles.icon}
      />
    </Button>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 65,
    width: 65,
    borderRadius: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#501887",
  },
  icon: {
    fontSize: 32,
  },
});

export default CameraActivation;
