import React, { FC, useState, useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { NativeRouter, Switch, Route } from "react-router-native";

import HomeScreen from "./src/screens/HomeScreen";
import AlbumScreen from "./src/screens/AlbumScreen";

const App: FC = () => {
  return (
    // <View style={styles.container}>
    //   <HomeScreen />
    // </View>
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/albums" component={AlbumScreen} />
        </Switch>
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
