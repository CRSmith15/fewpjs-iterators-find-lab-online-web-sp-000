const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  function yearWon(arr) {
    return arr.result === "Won"
  }
  return arr.find(yearWon)
}
