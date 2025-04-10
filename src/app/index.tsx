import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect, useRouter } from "expo-router";
import { useAuthStore } from "../store/authStore";
import { getIp } from "../helpers";

export default function index() {
  const [loading, setLoading] = useState(true);
  const { auth } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!auth && !loading) {
      router.replace("/login");
    }
    setLoading(false);
  }, [loading]);

  if (loading) return <Text>Loading...</Text>;

  return <Redirect href="/(tabs)" />;
}
