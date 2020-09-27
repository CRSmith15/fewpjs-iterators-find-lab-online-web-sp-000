const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  function yearWon(arr) {
    if (arr.result === "W") {
      return arr.year;
    } else {
      return undefined
    }
  }
  return arr.find(yearWon)
}
