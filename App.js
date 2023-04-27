import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Enter a goal" style={styles.input} />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals here...</Text>
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  input: {
    flex: 1,
    borderColor: "gray",
    borderWidth: 2,
    borderRadius: 12,
    padding: 6,
  },
  goalsContainer: {
    flex: 6,
  },
})
