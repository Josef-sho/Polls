import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { Stack } from "expo-router";

const Polls = [1, 2, 3];

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Screen options={{
          title: 'Polls',
        }} 
      />
      <View style={styles.container}>
        <FlatList
          data={Polls}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.pollsContainer}>
              <Text style={styles.polltitle}>Example Question {item}</Text>
            </View>
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  container: {
    flex: 1,
    padding: 10,
    gap: 5,
    marginTop: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  pollsContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
  },
  polltitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});
