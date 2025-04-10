import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import themes from "@/src/constants/themes";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackTitle: "Back",
        headerTitle: "",
        headerTintColor: themes.COLORS.grey,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen
        name="register"
        options={{
          headerBackTitle: "login",
        }}
      />
    </Stack>
  );
}
