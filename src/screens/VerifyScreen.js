import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import TimelineComponent from "../components/TimelineComponent"
import VerifyComponent from "../components/VerifyComponent"

export default function VerifyFaceScreen(props) {
  return (
    <View style={styles.container}>
      <TimelineComponent />
      <VerifyComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
