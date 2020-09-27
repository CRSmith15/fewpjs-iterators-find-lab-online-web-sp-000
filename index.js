const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  function yearWon(arr) {
    (arr.result === "W").year
  }
  return arr.find(yearWon)
}
