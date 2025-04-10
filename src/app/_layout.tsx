import { View, Text, StatusBar } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import themes from "../constants/themes";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const client = new QueryClient();

  const [loaded, error] = useFonts({
    "mono-regular": require("@/src/assets/fonts/SpaceMono-Regular.ttf"),
    "mono-bold": require("@/src/assets/fonts/SpaceMono-Bold.ttf"),
    "mono-italic": require("@/src/assets/fonts/SpaceMono-Italic.ttf"),
    "mono-italic-bold": require("@/src/assets/fonts/SpaceMono-BoldItalic.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <QueryClientProvider client={client}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: themes.COLORS.background,
          }}
        >
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
          <Toast />
          <StatusBar />
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default RootLayout;
