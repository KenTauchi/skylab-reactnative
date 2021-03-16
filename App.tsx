import React, { FC, useState, useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
