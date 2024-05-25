import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,FlatList} from "react-native";



const Polls=[1,2,3]

export default function TabTwoScreen() {
  return (

      <FlatList
      data={Polls}
      contentContainerStyle={{gap:5, padding:30, marginTop: 10}} 
      renderItem={({item}) => (
        <View style={styles.pollsContainer}>
          <Text style={styles.polltitle}> Example Question </Text>
        </View>
      )}
      />

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
        
    },
    polltitle : {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20
    }
 });