import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import VerifyScreen from "../screens/VerifyScreen"

const VerifiableStack = createStackNavigator()

export default function _VerifiableStack({ name, component }) {
  return (
    <VerifiableStack.Navigator headerMode="none">
      <VerifiableStack.Screen name={name} component={{component}} />
      <VerifiableStack.Screen name="VerifyScreen" component={VerifyScreen} />
    </VerifiableStack.Navigator>
  )
}
