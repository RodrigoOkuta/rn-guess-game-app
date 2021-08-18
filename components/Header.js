import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText
        style={{
          ...styles.headerBase,
          ...Platform.select({
            ios: styles.headerIos,
            android: styles.headerAndroid,
          }),
        }}
      >
        {title}
      </TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    padding: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIos: {
    backgroundColor: Colors.primary,
  },
  headerAndroid: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerTitle: {
    color: Platform.OS === "android" ? Colors.primary : "white",
  },
});

export default Header;
