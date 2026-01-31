import { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, task]); 
    setTask("");
  };

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <Text style={{ fontSize: 30, textAlign: 'center' }}>To-Do List</Text>
      <ScrollView>
        {tasks.map((item, index) => (
          <Text key={index} style={{ fontSize: 20, padding: 10 }}>* {item}</Text>
        ))}
      </ScrollView>
      <TextInput
        placeholder="New Task"
        value={task}
        onChangeText={setTask}
        style={{ borderWidth: 1, margin: 20, padding: 10 }}
      />
      <Button title="Add" onPress={addTask} />
    </View>
  );
}