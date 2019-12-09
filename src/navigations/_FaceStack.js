import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import FaceScreen from "../screens/_FaceScreen"
import VerifyScreen from "../screens/VerifyScreen"

const FaceStack = createStackNavigator()

export default function _FaceStack() {
  return (
    <FaceStack.Navigator headerMode="none">
      <FaceStack.Screen name="FaceScreen" component={FaceScreen} />
      <FaceStack.Screen name="VerifyScreen" component={VerifyScreen} />
    </FaceStack.Navigator>
  )
}
