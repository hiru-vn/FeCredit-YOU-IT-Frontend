import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import CameraScreen from "../screens/CameraScreen"
import VerifyScreen from "../screens/VerifyScreen"


const CameraStack = createStackNavigator()
export default function _CameraStack({ progress }) {
  return (
    <CameraStack.Navigator headerMode="none">
      <CameraStack.Screen 
        name={
          progress === 2 ? "FrontIdScreen" :
          progress === 3 ? "BackIdScreen" :
          progress === 4 ? "FaceScreen" :
          console.warn("Something's wrong in CameraStack.js")
        } 
        component={props => <CameraScreen {...props} progress={progress}/>} 
      />
      <CameraStack.Screen name="VerifyScreen" component={VerifyScreen} />
    </CameraStack.Navigator>
  )
}
