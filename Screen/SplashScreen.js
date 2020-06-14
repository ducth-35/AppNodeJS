import React from "react";
import { Text, View, StyleSheet, ImageBackground, Image } from "react-native";

export default function SplashScreen() {
  return (
    <ImageBackground
    source={{
      uri:
        "https://i.pinimg.com/564x/f4/bb/f2/f4bbf235afb2a38bce8b1d9e1a39f5fd.jpg"
    }}
    style={styles.ImageBackground}
  >
    <View style={styles.container}>
    </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  ImageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});
