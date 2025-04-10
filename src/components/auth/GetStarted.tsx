import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "@/src/styles/auth/Header.style";
import { useRouter } from "expo-router";

export default function GetStarted() {
  const router = useRouter();

  const handlePress = () => {
    router.push("/login");
  };

  return (
    <View style={styles.getStartedContainer}>
      <TouchableOpacity style={styles.getStartedBtn} onPress={handlePress}>
        <Text style={styles.getStartedTxt}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}
