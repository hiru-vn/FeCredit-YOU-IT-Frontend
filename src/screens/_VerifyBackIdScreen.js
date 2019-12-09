import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import TimelineComponent from "../components/TimelineComponent"
import VerifyBackId from "../components/VerifyBackId"

export default function VerifyBackIdScreen(props) {
  return (
    <View style={styles.container}>
      <TimelineComponent />
      <VerifyBackId />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
