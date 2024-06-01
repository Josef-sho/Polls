import { Stack, useLocalSearchParams} from "expo-router";
import React from "react";
import { Text,View,StyleSheet, Pressable,Button} from "react-native";
import { Feather } from '@expo/vector-icons';
import { useState } from "react";


const Polls = {
  question:"React native vs Flutter",
  options:[
    "React Native FTW",
    "Flutter is the best",
    "SwiftUI is better than both",
  ]
};

const vote = () => {

}

export default function PollsDetails() {
  const {id} = useLocalSearchParams()
  const [selected, setselected] = useState('')
  return (
    <View style={styles.container}>
        <Text style={styles.question}>{Polls.question}</Text>
        
        <View style={{gap:5}}>
        {Polls.options.map((option) => ( 
          <Pressable onPress={() => setselected(option)} key={option} style={styles.optionContainer}>
            <Feather name={option === selected ? "check-circle" :"circle"} 
            size={18} 
            color={option === selected ? "geeen" : "gray"} />
            <Text>{option}</Text>
          </Pressable>
        ))}
        </View>
        <Button title="Vote" onPress={}>

        </Button>
    </View>
  )
}
const styles = StyleSheet.create({

  container : {
    padding:10,
    gap:20,
  },
  question: {
    fontSize:20,
    fontWeight:600,
  },
  optionContainer:{
    backgroundColor:"white",
    padding:10,
    borderRadius:5,
    flexDirection:"row",
    alignItems:"center",
    gap:10,
  },
})