import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"

export default function App() {
  const [goalInput, setGoalInput] = useState("")
  const [goals, setGoals] = useState([])

  const inputHandler = (text) => {
    setGoalInput(text)
  }

  const addGoalHandler = () => {
    setGoals((prevState) => [
      ...prevState,
      { text: goalInput, key: Math.random().toString() },
    ])
    setGoalInput("")
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a goal"
          style={styles.input}
          onChangeText={inputHandler}
          value={goalInput}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          // Usa .key automáticamente tomada de la data que pasamos
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 6,
    alignItems: "center",
    paddingBottom: 12,
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 12,
    padding: 6,
    paddingHorizontal: 12,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
})
