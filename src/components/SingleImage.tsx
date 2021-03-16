import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Thumbnail } from "native-base";

// defining the type of props to pass to the component
interface imageProps {
  image: HTMLImageElement;
}

const SingleImage: FC<imageProps> = ({ image }) => {
  return (
    <View>
      <Thumbnail square source={image} style={styles.thumbnail} />
      <View style={styles.checkCircle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 5,
  },
  checkCircle: {
    height: 20,
    width: 20,
    position: "absolute",
    bottom: 7,
    right: 11,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255,0.4)",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
});

export default SingleImage;
