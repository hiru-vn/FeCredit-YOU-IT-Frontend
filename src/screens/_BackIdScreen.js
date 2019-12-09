import React, { useEffect } from "react"
import { View, StyleSheet, Text } from "react-native"
import TimelineComponent from "../components/TimelineComponent"
import BackIdCamera from "../components/BackIdCamera"
import CameraToolbar from "../components/CameraToolbar"
import { setGlobal } from "reactn"

export default function BackIdScreen(props) {
  useEffect(() => {
    setGlobal({
      currentProgress: 3
    })
  }, [])

  return (
    <View style={styles.container}>
      <TimelineComponent />
      <BackIdCamera />
      <CameraToolbar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
