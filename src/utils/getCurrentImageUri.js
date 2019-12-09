import { getGlobal } from "reactn"

export default function getCurrentImageUri () {
  switch (getGlobal().currentProgress) {
    case 2: return getGlobal().frontIdUri
    case 3: return getGlobal().backIdUri
    case 4: return getGlobal().faceUri
    default: console.warn("Something's wrong in src/utils/getCurrentImageUri.js")
      return "http://cafefcdn.com/thumb_w/650/2018/10/2/photo1538470864466-1538470864467445155245.jpg"
  }
}
