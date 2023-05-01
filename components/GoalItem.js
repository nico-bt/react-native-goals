import React from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

function GoalItem({ text, deleteGoal, id }) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
      <Pressable onPress={() => deleteGoal(id)}>
        <Image
          style={styles.deleteIcon}
          source={require("../assets/delete.png")}
        />
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    marginHorizontal: 0,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 6,
  },
  goalText: {
    fontSize: 16,
    color: "white",
    flex: 1,
  },
  deleteIcon: {
    width: 20,
    height: 20,
    tintColor: "white",
    marginEnd: 6,
  },
})
