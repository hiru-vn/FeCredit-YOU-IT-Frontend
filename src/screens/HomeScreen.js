import React, { useCallback } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from "react-native-paper"

export default function HomeScreen ({ navigation, route }) {
  const start = useCallback(
    () => {
      navigation.popToTop()
      navigation.push("FormScreen")
    },
    [route],
  )

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        contentStyle={{ margin: 10 }}
        mode="contained"
        onPress={start}>
        <Text style={styles.buttonLabel} children="BẮT ĐẦU" />
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: 250
  },
  buttonLabel: {
    fontSize: 25
  }
})