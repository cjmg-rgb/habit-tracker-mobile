import React from "react";
import LoginScreen from "@/src/screens/auth/Login.screen";
import LoginHeader from "@/src/components/auth/LoginHeader";
import { Text, TouchableOpacity, View } from "react-native";
import GetStarted from "@/src/components/auth/GetStarted";

export default function login() {
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
