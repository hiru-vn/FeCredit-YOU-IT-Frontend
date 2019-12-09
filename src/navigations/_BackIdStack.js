import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import BackIdScreen from "../screens/_BackIdScreen"
import VerifyScreen from "../screens/VerifyScreen"

const BackIdStack = createStackNavigator()

export default function _BackIdStack() {
  return (
    <BackIdStack.Navigator headerMode="none">
      <BackIdStack.Screen name="BackIdScreen" component={BackIdScreen} />
      <BackIdStack.Screen name="VerifyScreen" component={VerifyScreen} />
    </BackIdStack.Navigator>
  )
}
