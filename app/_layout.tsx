import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

// share ui need out in many pages
export default function RootLayout() {
  const route = useRouter();
  useEffect(() => {
    getToken();
  }, [])
  async function getToken() {
    let data = await AsyncStorage.getItem("token");
    if (data == "negm") {
      route.replace('/(tabs)/home');
    }
    else {
      route.replace('/(auth)/login');
    }
  }


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
