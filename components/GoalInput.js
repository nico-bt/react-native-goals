import React, { useState } from "react"
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native"

function GoalInput({ addGoalHandler, visible, setModalIsVisible }) {
  const [goalInput, setGoalInput] = useState("")

  const inputHandler = (text) => {
    setGoalInput(text)
  }

  const pressAdd = () => {
    if (goalInput) {
      addGoalHandler(goalInput)
      setGoalInput("")
      setModalIsVisible(false)
    }
  }

  const pressCancel = () => {
    setGoalInput("")
    setModalIsVisible(false)
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/add_task.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Enter a goal"
          style={styles.input}
          onChangeText={inputHandler}
          value={goalInput}
          autoFocus
        />
        <View style={styles.buttonsContainer}>
          <Button title="Cancel" onPress={pressCancel} color={"gray"} />
          <Button title="Add Goal" onPress={pressAdd} color={"darkblue"} />
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    gap: 6,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 12,
    padding: 6,
    paddingHorizontal: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
})
