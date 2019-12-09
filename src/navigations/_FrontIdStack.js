import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import FrontIdScreen from "../screens/_FrontIdScreen"
import VerifyScreen from "../screens/VerifyScreen"

const FrontIdStack = createStackNavigator()

export default function _FrontIdStack() {
  return (
    <FrontIdStack.Navigator headerMode="none">
      <FrontIdStack.Screen name="FrontIdScreen" component={FrontIdScreen} />
      <FrontIdStack.Screen name="VerifyScreen" component={VerifyScreen} />
    </FrontIdStack.Navigator>
  )
}
