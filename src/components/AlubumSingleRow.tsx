import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Left,
  Right,
  Thumbnail,
  H2,
  H3,
} from "native-base";

import figure1 from "../../assets/albumImages/figure1.png";
import SingleImage from "./SingleImage";

// defining the type of each property in the object passed as a prop
type dataType = {
  albumTitle: string;
  image: any[];
};

// defining the type of props to pass to the component
interface dataProps {
  data: dataType;
}

const AlubumSingleRow: FC<dataProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <Text style={{ marginLeft: 32, fontSize: 20 }}>{data.albumTitle}</Text>
        <Icon
          type="FontAwesome"
          name="angle-right"
          style={{ color: "#9bcdde" }}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        {data.image.map((img, index) => (
          <SingleImage image={img} key={index} />
        ))}
      </View>
    </View>
  );
};

export default AlubumSingleRow;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
});
