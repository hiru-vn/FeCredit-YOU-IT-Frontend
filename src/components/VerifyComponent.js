import React from "react"
import { View, StyleSheet, Text, Dimensions, Image } from "react-native"
import getCurrentImageUri from "../utils/getCurrentImageUri"
import { Button } from "react-native-paper"
import { useNavigation } from "@react-navigation/core"
import { goNext } from "../utils/navigations"
import { getGlobal } from "reactn"

function isFaceVerifying () {
  return getGlobal().currentProgress === 4
}

export default function VerifyComponent(props) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Image
        style={isFaceVerifying() ? styles.facePreview : styles.idPreview}
        source={{ uri: getCurrentImageUri() }}
      />
      {
        isFaceVerifying() || 
        <Text style={styles.text} children="Kiểm tra lại thông tin trên ảnh" />
      }
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
    marginBottom: 7
  },
  contentStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelStyle: {
    fontSize: 22
  }
}

const winWidth = Dimensions.get("window").width
const camSize = Dimensions.get("window").width - 20

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  facePreview: {
    position: "absolute",
    borderWidth: 10,
    borderColor: "#005C28",
    top: 5,
    width: camSize,
    height: camSize,
    borderRadius: camSize * 0.5
  },
  idPreview: {
    width: winWidth,
    height: winWidth * 0.65,
    backgroundColor: "#005C28",
    position: "absolute",
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
    bottom: 15
  }
})
