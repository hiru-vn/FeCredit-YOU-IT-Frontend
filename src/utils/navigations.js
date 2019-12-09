import { getGlobal } from "reactn"

export const listMainNavigators = [
  "HomeScreen",
  "FormScreen",
  "FrontIdStack",
  "BackIdStack",
  "FaceStack",
  "ResultScreen"
]

export function navigateTo(navigation, toRoute) {
  navigation.popToTop()
  navigation.popToTop()
  navigation.navigate(toRoute)
}

export function getCurrentRoute() {
  const { currentProgress } = getGlobal()
  return listMainNavigators[currentProgress]
}

export function goHome(navigation) {
  navigateTo(navigation, listMainNavigators[0])
}  

export function goNext(navigation, currentRoute = getCurrentRoute()) {
  const index = listMainNavigators.indexOf(currentRoute)
  if (index === -1 || index === listMainNavigators.length - 1) {
    console.warn("Something's wrong in ./src/utils/navigations.js => goNext")
    return
  }

  const nextIndex = index + 1
  navigateTo(navigation, listMainNavigators[nextIndex])
  // navigation.push(listMainNavigators[nextIndex])
}

// export function goNext(navigation, currentRoute = getCurrentRoute()) {
//   const index = listMainNavigators.indexOf(currentRoute)
//   if (index === -1 || index === listMainNavigators.length - 1) {
//     console.warn("Something's wrong in ./src/utils/navigations.js => goNext")
//     return
//   }

//   const nextIndex = index + 1
//   navigateTo(navigation, listMainNavigators[nextIndex])
// }

export function goBack(navigation, currentRoute = getCurrentRoute()) {
  const index = listMainNavigators.indexOf(currentRoute)
  if (index === -1 || index === 0) {
    console.warn("Something's wrong in ./src/utils/navigations.js => goBack")
    return
  }

  const backIndex = index - 1
  navigateTo(navigation, listMainNavigators[backIndex])
}