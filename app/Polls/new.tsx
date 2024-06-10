import { Stack } from "expo-router";
import {View, Text} from "react-native";

export default function CreatePoll() {
  return (
    <View>
        <Stack.Screen options={{title:"CreatePoll"}}/>
        <Text> Create a new Poll </Text>
    </View>
  );
}

const styles