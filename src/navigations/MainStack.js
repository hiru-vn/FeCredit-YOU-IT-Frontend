import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from "../screens/HomeScreen"
import FormScreen from "../screens/FormScreen"
import CameraStack from "./CameraStack"
import ResultScreen from "../screens/ResultScreen"
import Appbar from "../components/Appbar"

const MainStack = createStackNavigator()
export default function _MainStack() {
  return (
    <MainStack.Navigator
      screenOptions={{
        header: props => <Appbar {...props} />
      }}>
      <MainStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="FormScreen" component={FormScreen} />
      <MainStack.Screen
        name="FrontIdStack"
        component={props => <CameraStack {...props} progress={2} />}
      />
      <MainStack.Screen
        name="BackIdStack"
        component={props => <CameraStack {...props} progress={3} />}
      />
      <MainStack.Screen
        name="FaceStack"
        component={props => <CameraStack {...props} progress={4} />}
      />
      <MainStack.Screen name="ResultScreen" component={ResultScreen} />
    </MainStack.Navigator>
  )
}
