import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import "react-native-reanimated";
import "../../global.css";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    // Hide the splash screen after the layout mounts
    SplashScreen.hideAsync();
  }, []);

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
      </Stack>
    </ThemeProvider>
  );
}
