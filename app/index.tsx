import { Link } from "expo-router";
import { View } from "react-native";

// entry point 
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/login">go to login</Link>
    </View>
  );
}
