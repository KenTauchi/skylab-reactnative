import React, { FC } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { Icon, Button } from "native-base";

import AlbumSingleRow from "../components/AlubumSingleRow";
import CameraActivation from "../components/CameraActivation";
import { albumData, album } from "../data";

const AlbumScreen: FC = () => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.MenuBarContainer}>
        <Icon type="Entypo" name="menu" style={styles.menuIcon} />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={albumData}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <AlbumSingleRow album={item} />}
      />
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
