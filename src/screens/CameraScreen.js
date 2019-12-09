import React, { useEffect } from "react"
import { View, StyleSheet, Text } from "react-native"
import TimelineComponent from "../components/TimelineComponent"
import FrontIdCamera from "../components/FrontIdCamera"
import BackIdCamera from "../components/BackIdCamera"
import FaceCamera from "../components/FaceCamera"
import CameraToolbar from "../components/CameraToolbar"
import { setGlobal, getGlobal } from "reactn"


export default function CameraScreen({ progress }) {
  useEffect(() => {
    setGlobal({
      currentProgress: progress
    })
  }, [])

  return (
    <View style={styles.container}>
      <TimelineComponent />
      {
        progress === 2 ? <FrontIdCamera /> :
        progress === 3 ? <BackIdCamera /> :
        progress === 4 ? <FaceCamera /> :
        console.warn("Something's wrong in CameraScreen.js")
      }
      <CameraToolbar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
