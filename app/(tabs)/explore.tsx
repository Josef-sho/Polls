import { StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={{
      backgroundColor: "blue",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Text style={{ color: "white" }}> Hi </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
