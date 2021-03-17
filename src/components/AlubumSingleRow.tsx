import React, { FC } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { Icon } from "native-base";
import { albumData, album } from "../data";
import SingleImage from "./SingleImage";

const AlubumSingleRow: FC<{ album: album }> = ({ album }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={{ marginLeft: 32, fontSize: 20 }}>{album.albumTitle}</Text>
        <Icon
          type="FontAwesome"
          name="angle-right"
          style={{ color: "#9bcdde" }}
        />
      </View>
      <FlatList
        horizontal
        data={album.images}
        keyExtractor={(item) => `${item}`}
        renderItem={({ item }) => <SingleImage img={item} />}
      />
    </View>
  );
};

export default AlubumSingleRow;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
});
