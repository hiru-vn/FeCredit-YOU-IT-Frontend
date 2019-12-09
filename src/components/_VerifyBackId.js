import React from "react"
import { View, StyleSheet, Text, Dimensions, Image } from "react-native"
import getCurrentImageUri from "../utils/getCurrentImageUri"
import { Button } from "react-native-paper"
import { useNavigation } from "@react-navigation/core"
import { goNext } from "../utils/navigations"

export default function VerifyFrontId(props) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagePreview}
        source={{ uri: getCurrentImageUri() }}
      />
      <Text style={styles.text} children="Kiểm tra lại thông tin trên ảnh" />
      <View style={styles.buttonWrapper}>
        <Button
          {...ButtonStyle}
          mode="contained"
          onPress={() => goNext(navigation)}
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

const winWidth = Dimensions.get("window").width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imagePreview: {
    width: winWidth,
    height: winWidth * 0.65,
    position: "absolute",
    backgroundColor: "#005C28",
    left: 0,
    top: 50
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
