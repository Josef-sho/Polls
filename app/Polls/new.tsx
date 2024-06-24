import { Stack } from "expo-router";
import {View, Text,StyleSheet} from "react-native";

export default function CreatePoll() {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{title:"CreatePoll"}}/>
        <Text> Create a new Poll </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{}
})