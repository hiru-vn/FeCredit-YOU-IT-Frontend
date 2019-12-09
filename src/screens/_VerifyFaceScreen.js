import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import TimelineComponent from "../components/TimelineComponent"
import VerifyFace from "../components/VerifyFace"

export default function VerifyFaceScreen(props) {
  return (
    <View style={styles.container}>
      <TimelineComponent />
      <VerifyFace />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
