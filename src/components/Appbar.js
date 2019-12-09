import React from "react"
import { StyleSheet } from "react-native"
import Constants from "expo-constants"
import { Appbar } from "react-native-paper"
import { goBack, goHome } from '../utils/navigations'

export default function _Appbar({ navigation }) {
  const _goBack = () => goBack(navigation)
  const _goHome = () => goHome(navigation)

  return (
    <Appbar.Header style={styles.appbar}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Action icon="home" onPress={_goHome} />
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  appbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    width: "100%"
  }
})

