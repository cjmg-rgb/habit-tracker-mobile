import { View, Text } from "react-native";
import React from "react";
import styles from "@/src/styles/auth/Header.style";
import { Image } from "react-native";
import themes from "@/src/constants/themes";

export default function LoginHeader() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("@/src/assets/images/login-header.png")}
        style={styles.headerImage}
      />
      <Text style={styles.headerTitle}>THE HABIT</Text>
      <Text style={styles.headerSubtitle}>
        "Consistency requires you to be as enthusiastic about a mundane task as
        you are about achieving greatness."{" "}
      </Text>
      <Text style={{ color: themes.COLORS.black }}>- Michael Andrew</Text>
    </View>
  );
}
