import React, { FC } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Icon, Button } from "native-base";
import { Link } from "react-router-native";

import AlbumSingleRow from "../components/AlubumSingleRow";
import CameraActivation from "../components/CameraActivation";
import { albumData } from "../data";

const AlbumScreen: FC = () => {
  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {albumData.map((album, index) => (
          <AlbumSingleRow data={album} key={index} />
        ))}
      </ScrollView>
      <CameraActivation />
    </View>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#dfe3ee",
    paddingHorizontal: 16,
    paddingTop: 32,
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
