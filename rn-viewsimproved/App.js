import React, { useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"} 
        >
          <Text style={styles.title}>To-Do</Text>
          <View style={{ flex: 1 }}>
            {tasks.map((t, i) => <Text key={i} style={styles.task}>{t}</Text>)}
          </View>
          <TextInput
            style={styles.input}
            value={task}
            onChangeText={setTask}
            onEndEditing={() => {
              setTasks([...tasks, task]);
              setTask("");
            }}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "white" 
  },
  title: { 
    fontSize: 36, 
    fontWeight: 'bold', 
    alignSelf: "center" 
  },
  input: { 
    borderBottomWidth: 1, 
    borderColor: "#d3d3d3", 
    width: "90%", 
    padding: 10, 
    alignSelf: 'center'
  },
  task: { 
    fontSize: 20, 
    padding: 10 
  }
});