import React, { useEffect } from "react"
import { View, StyleSheet, Text } from "react-native"
import TimelineComponent from "../components/TimelineComponent"
import FaceCamera from "../components/FaceCamera"
import CameraToolbar from "../components/CameraToolbar"
import { setGlobal, getGlobal } from "reactn"

export default function FaceScreen(props) {
  useEffect(() => {
    setGlobal({
      currentProgress: 4
    })
  }, [])

  return (
    <View style={styles.container}>
      <TimelineComponent />
      <FaceCamera />
      <CameraToolbar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
