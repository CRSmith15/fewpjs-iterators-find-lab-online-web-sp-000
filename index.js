const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  function yearWon(arr) {
    return arr.result === "W"
  }
  return arr.find(yearWon).year
}
