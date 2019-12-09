import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../screens/HomeScreen"
import FormScreen from "../screens/FormScreen"
import CameraStack from "./CameraStack"
import ResultScreen from "../screens/ResultScreen"


const MainStack = createStackNavigator()
export default function _MainStack() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="FormScreen" component={FormScreen} />
      <MainStack.Screen
        name="FrontIdStack"
        component={() => <CameraStack progress={2} />}
      />
      <MainStack.Screen
        name="BackIdStack"
        component={() => <CameraStack progress={3} />}
      />
      <MainStack.Screen
        name="FaceStack"
        component={() => <CameraStack progress={4} />}
      />
      <MainStack.Screen name="ResultScreen" component={ResultScreen} />
    </MainStack.Navigator>
  )
}
