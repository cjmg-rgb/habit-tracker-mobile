import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/src/store/authStore";

export default function LogoutButton() {
  const router = useRouter();
  const { removeCredentials } = useAuthStore();

  const handleLogout = () => {
    removeCredentials();
    router.replace("/(auth)/login");
  };

  return (
    <TouchableOpacity onPress={handleLogout}>
      <Text>LOGOUT</Text>
    </TouchableOpacity>
  );
}
