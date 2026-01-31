import React, { useState } from "react";
import { View, Text, TextInput, KeyboardAvoidingView, Platform, StyleSheet, FlatList } from "react-native";
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
          <FlatList
            data={tasks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.taskContainer}>
                <Text style={styles.task}>* {item}</Text>
              </View>
            )}
          />
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
    width: "90%", padding: 10, 
    alignSelf: 'center', 
    marginBottom: 20 
  },
  taskContainer: { 
    padding: 10, 
    borderBottomWidth: 1, 
    borderColor: '#eee' 
  },
  task: { 
    fontSize: 20 
  }
});