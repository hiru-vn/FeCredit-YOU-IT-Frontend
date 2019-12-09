import { setGlobal, getGlobal } from "reactn"

export default function setImage ({ uri }) {
  switch (getGlobal().currentProgress) {
    case 2: setGlobal({ frontIdUri: uri }); break
    case 3: setGlobal({ backIdUri: uri }); break
    case 4: setGlobal({ faceUri: uri }); break
    default: console.warn("Something's wrong in src/utils/setImage.js")
      break
  }
  console.log("frontIdUri:", getGlobal().frontIdUri)
  console.log("backIdUri:", getGlobal().backIdUri)
  console.log("faceUri:", getGlobal().faceUri)
}