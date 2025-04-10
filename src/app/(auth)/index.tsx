import React from "react";
import LoginScreen from "@/src/screens/auth/Login.screen";
import LoginHeader from "@/src/components/auth/LoginHeader";
import { Text, TouchableOpacity, View } from "react-native";
import GetStarted from "@/src/components/auth/GetStarted";
import themes from "@/src/constants/themes";

export default function index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LoginHeader />
      <GetStarted />
    </View>
  );
}
