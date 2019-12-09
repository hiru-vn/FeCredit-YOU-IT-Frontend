import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text } from 'react-native'
import Form from '../components/FormScreen'
import TimelineComponent from "../components/TimelineComponent"
import { setGlobal } from "reactn"

export default function FormScreen (props) {
  useEffect(() => {
    setGlobal({
      currentProgress: 1
    })
  }, [])

  return (
    <View style={styles.container}>
      <TimelineComponent/>
      <Form/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})