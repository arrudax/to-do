import {  Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen />
      <View>
        <Text>This screen doesn't exist.</Text>
      </View>
    </>
  );
}
