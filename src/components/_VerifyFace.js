import React from "react"
import { View, StyleSheet, Dimensions, Image } from "react-native"
import getCurrentImageUri from "../utils/getCurrentImageUri"
import { Button } from "react-native-paper"
import { useNavigation } from "@react-navigation/core"

export default function VerifyFrontId(props) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagePreview}
        source={{ uri: getCurrentImageUri() }}
      />
      <View style={styles.buttonWrapper}>
        <Button
          {...ButtonStyle}
          mode="contained"
          onPress={() => navigation.navigate("ResultScreen")}
          children="Hoàn tất"
        />
        <Button
          {...ButtonStyle}
          onPress={() => navigation.pop()}
          children="Chụp lại"
        />
      </View>
    </View>
  )
}

const ButtonStyle = {
  style: {
    width: 200,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 7
  },
  labelStyle: {
    fontSize: 22
  }
}

const camSize = Dimensions.get("window").width - 20
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imagePreview: {
    position: "absolute",
    borderWidth: 10,
    borderColor: "#005C28",
    top: 50,
    width: camSize,
    height: camSize,
    borderRadius: camSize * 0.5
  },
  text: {
    fontWeight: "500",
    color: "#020003",
    position: "relative",
    fontSize: 19,
    top: 50
  },
  buttonWrapper: {
    position: "absolute",
    bottom: 30
  }
})
