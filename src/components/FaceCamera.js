import React, { useState, useEffect, useRef } from "react"
import { View, StyleSheet, Text, Dimensions } from "react-native"
import { Camera } from "expo-camera"
import * as FaceDetector from "expo-face-detector"
import { setGlobal } from "reactn"

export default function FaceCamera(props) {
  const [hasFace, setHasFace] = useState(false)
  const camera = useRef(null)

  useEffect(() => {
    setGlobal({ camera: camera.current })
  }, [camera])

  const handleFacesDetected = ({ faces }) => {
    let newHasFace = false

    if (faces.length === 1) {
      const { x, y } = faces[0].bounds.origin
      const { width, height } = faces[0].bounds.size
      const { rollAngle, yawAngle } = faces[0]

      if (
        x > -50 &&
        y > -50 &&
        x + width < camSize + 100 &&
        y + height < camSize + 100 &&
        // Math.abs(rollAngle) < 2.4 &&
        Math.abs(yawAngle) < 12
      ) {
        newHasFace = true
      }
    }

    setHasFace(newHasFace)
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.cameraWrapper,
          styles.cameraPreview,
          { borderColor: hasFace ? "#005C28" : "#B30E00" }
        ]}>
        <Camera
          type={Camera.Constants.Type.front}
          style={styles.cameraPreview}
          ref={camera}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.Constants.Mode.accurate
          }}
          minDetectionInterval={100}
        />
      </View>
      <Text style={styles.text} children="Đặt khuôn mặt vào khung" />
    </View>
  )
}

const camSize = Dimensions.get("window").width - 20
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cameraWrapper: {
    position: "absolute",
    borderWidth: 10,
    left: 10,
    overflow: "hidden"
  },
  cameraPreview: {
    width: camSize,
    height: camSize,
    borderRadius: camSize * 0.5
  },
  text: {
    fontWeight: "500",
    color: "#020003",
    position: "relative",
    fontSize: 19,
    top: camSize * 0.57
  }
})
