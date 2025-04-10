import { View, Text, Button } from "react-native";
import React from "react";
import { useAuthStore } from "@/src/store/authStore";
import LogoutButton from "@/src/components/auth/LogoutButton";

export default function profile() {
  return (
    <View>
      <Text>profile</Text>
      <LogoutButton />
    </View>
  );
}
