import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "@/src/styles/Login.style";

export default function GetStarted() {
  return (
    <View style={styles.getStartedContainer}>
      <TouchableOpacity style={styles.getStartedBtn}>
        <Text style={styles.getStartedTxt}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}
