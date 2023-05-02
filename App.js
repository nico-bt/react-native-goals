import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Button, FlatList, StyleSheet, View } from "react-native"
import GoalItem from "./components/GoalItem"
import GoalInput from "./components/GoalInput"

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [goals, setGoals] = useState([])

  const addGoalHandler = (goalInput) => {
    setGoals((prevState) => [
      ...prevState,
      { text: goalInput, key: Math.random().toString() },
    ])
  }

  const deleteGoalHandler = (id) => {
    const filteredGoals = goals.filter((goal) => goal.key !== id)
    setGoals(filteredGoals)
  }

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Button title="Add New Goal" onPress={() => setModalIsVisible(true)} />

        {/* Modal */}
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={modalIsVisible}
          setModalIsVisible={setModalIsVisible}
        />

        {goals.length > 0 && (
          <View style={styles.goalsContainer}>
            <FlatList
              // Usa .key automáticamente tomada de la data que pasamos. Si no usar keyExtractor
              data={goals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    text={itemData.item.text}
                    deleteGoal={deleteGoalHandler}
                    id={itemData.item.key}
                  />
                )
              }}
            />
          </View>
        )}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 36,
    alignContent: "center",
    justifyContent: "center",
  },
  goalsContainer: {
    flex: 5,
    marginVertical: 16,
  },
})
