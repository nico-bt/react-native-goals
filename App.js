import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { FlatList, StyleSheet, View } from "react-native"
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
  const [goals, setGoals] = useState([])

  const addGoalHandler = (goalInput) => {
    setGoals((prevState) => [
      ...prevState,
      { text: goalInput, key: Math.random().toString() },
    ])
  }

  return (
    <View style={styles.container}>
      <GoalInput addGoalHandler={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          // Usa .key automáticamente tomada de la data que pasamos. Si no usar keyExtractor
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />
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
  goalsContainer: {
    flex: 5,
  },
})
