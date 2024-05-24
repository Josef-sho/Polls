import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    
    <View style={styles.container}>
      <View style={styles.pollsContainer}>
        <Text style={styles.polltitle}> Example Question </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
// help

const styles = StyleSheet.create({ 

    container : {
        flex: 1,
        backgroundColor: 'gainsboro',
        padding:30
        
    },
    pollsContainer : {
        backgroundColor: '#fff',
        borderRadius:5,

    }
 });