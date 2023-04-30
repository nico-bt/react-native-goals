import React, { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

function GoalInput({ addGoalHandler }) {
  const [goalInput, setGoalInput] = useState("")

  const inputHandler = (text) => {
    setGoalInput(text)
  }

  const onPressHandler = () => {
    if (goalInput) {
      addGoalHandler(goalInput)
      setGoalInput("")
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter a goal"
        style={styles.input}
        onChangeText={inputHandler}
        value={goalInput}
      />
      <Button title="Add Goal" onPress={onPressHandler} />
    </View>
  )
}

export default GoalInput

const styles = StyleSheet.create({
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
})
