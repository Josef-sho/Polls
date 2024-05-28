import { Stack, useLocalSearchParams} from "expo-router";
import React from "react";
import { Text,View,StyleSheet } from "react-native";


const Polls = {
  question:"React native vs Flutter",
  options:[
    "React Native FTW",
    "Flutter is the best",
    "SwiftUI is better than both",
  ]
};

export default function PollsDetails() {
  const {id} = useLocalSearchParams()
  return (
    <View style={styles.container}>
        <Text style={styles.question}>{Polls.question}</Text>
        
        <View style={{gap:5}}>
        {Polls.options.map((option) => ( 
          <View key={option} style={styles.optionContainer}>
            <Text>{option}</Text>
          </View>
        ))}
        </View>
    </View>
  )
}
const styles = StyleSheet.create({

  container : {
    padding:10,
    gap:10
  },
  question: {
    fontSize:20,
    fontWeight:600,
  },
  optionContainer:{
    backgroundColor:"white",
    padding:10,
    borderRadius:5
  },
})