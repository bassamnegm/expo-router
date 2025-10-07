import { Stack } from "expo-router";

// share ui need out in many pages
export default function RootLayout() {
  return <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen name="index"></Stack.Screen>
    <Stack.Screen name="(auth)/login"></Stack.Screen>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }}></Stack.Screen>

    <Stack.Screen name="profile" ></Stack.Screen>
  </Stack>

}
