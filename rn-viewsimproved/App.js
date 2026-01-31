import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, FlatList, Alert } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const listRef = useRef(null);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"} 
          style={{ flex: 1 }}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>To-Do</Text>
            <FlatList
              ref={listRef}
              style={styles.taskList}
              data={tasks}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.taskContainer}>
                  <Text style={styles.task}>* {item}</Text>
                </View>
              )}
              onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: false })}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Enter a task'
              value={task}
              onChangeText={setTask}
              onEndEditing={() => {
                if (!(typeof task === "string" && task.length > 0)) {
                  alert("Enter a valid task!");
                  return;
                }
                setTasks(prev => [...prev, task]);
                setTask("");
              }}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "white", 
    alignItems: 'center', 
    justifyContent: 'space-between' 
  },
  contentContainer: { 
    alignItems: "center", 
    paddingHorizontal: 10, 
    minWidth: "100%", 
    maxHeight: "85%" 
  },
  title: { 
    fontSize: 36, 
    fontWeight: 'bold', 
    alignSelf: "center" 
  },
  taskList: { 
    backgroundColor: "#f2f2f2", 
    width: "100%", 
    borderRadius: 8, 
    paddingHorizontal: 5 
  },
  taskContainer: { 
    backgroundColor: "white", 
    borderWidth: 1, 
    borderColor: "#d3d3d3", 
    width: "100%", 
    padding: 10, 
    marginVertical: 4, 
    borderRadius: 8 
  },
  task: { 
    alignSelf: "flex-start", 
    fontSize: 24 
  },
  inputContainer: { 
    minWidth: "100%", 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    marginVertical: 10 
  },
  input: { 
    borderBottomWidth: 1,
    borderColor: "#d3d3d3", 
    width: "90%", 
    fontSize: 16, 
    height: 50, 
    padding: 10, 
    borderRadius: 8 
  }
});