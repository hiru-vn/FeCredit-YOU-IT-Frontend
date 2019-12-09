import React, { useEffect } from "react"
import { View, StyleSheet, Text } from 'react-native'
import TimelineComponent from "../components/TimelineComponent"
import FrontIdCamera from '../components/FrontIdCamera'
import CameraToolbar from "../components/CameraToolbar"
import { setGlobal, getGlobal } from "reactn"

export default function FrontIdScreen (props) {
  useEffect(() => {
    setGlobal({
      currentProgress: 2
    })
  }, [])

  return (
    <View style={styles.container}>
      <TimelineComponent />
      <FrontIdCamera />
      <CameraToolbar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})