import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import TimelineComponent from "../components/TimelineComponent"
import VerifyFrontId from "../components/VerifyFrontId"

export default function VerifyFrontIdScreen (props) {
  return (
    <View style={styles.container}>
      <TimelineComponent />
      <VerifyFrontId />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})