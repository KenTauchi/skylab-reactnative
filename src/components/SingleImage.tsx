import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Thumbnail } from "native-base";

// defining the type of props to pass to the component
interface imageProps {
  image: HTMLImageElement;
}

const SingleImage: FC<imageProps> = ({ image }) => {
  return (
    <Thumbnail
      square
      source={image}
      style={{ width: 100, height: 100, borderRadius: 10, marginRight: 5 }}
    />
  );
};

const styles = StyleSheet.create({});

export default SingleImage;
