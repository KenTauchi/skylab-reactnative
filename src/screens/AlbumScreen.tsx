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
      <View style={styles.MenuBarContainer}>
        <Icon type="Entypo" name="menu" style={styles.menuIcon} />
      </View>
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
    backgroundColor: "#d3d7de",
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  MenuBarContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginVertical: 16,
  },
  menuIcon: {
    color: "#501887",
  },
});
