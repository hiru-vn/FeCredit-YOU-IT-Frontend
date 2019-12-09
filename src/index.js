import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import Constants from "expo-constants"
import * as Permissions from "expo-permissions"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"
import { setGlobal } from "reactn"
// import Popup from './components/Popup'

import { NavigationNativeContainer } from "@react-navigation/native"
import MainStack from "./navigations/MainStack"

setGlobal({
  hasPermission: null,
  camera: null,
  currentProgress: 0,
  frontIdUri: "",
  backIdUri: "",
  faceUri: ""
})

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#005C28",
    accent: "#020003",
    error: "#B30E00"
  }
}

async function askCameraPermission () {
  const camera = await Permissions.askAsync(Permissions.CAMERA)
  const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL)
  const hasPermission =
    camera.status === "granted" && cameraRoll.status === "granted"
  setGlobal({ hasPermission })

  if (!hasPermission) {
    alert(
      "You need to give us permission to Camera and Camera Roll to get the app work properly! Please manually go to Settings and add us permission"
    )
  }
}

export default function App(props) {
  useEffect(() => {
    askCameraPermission()
  }, [])

  return (
    <NavigationNativeContainer>
      <PaperProvider theme={theme}>
        <MainStack />
      </PaperProvider>
    </NavigationNativeContainer>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight
//   }
// })
