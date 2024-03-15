export default function isValidString(input: string): boolean {
  const bracketsInit = {
    open: 0,
    close: 0,
    squareOpen: 0,
    squareClose: 0,
    angleOpen: 0,
    angleClose: 0,
  }

  const bracketsCount = input.split("").reduce((acc, char) => {
    switch (char) {
      case "(":
        acc.open++
        break
      case ")":
        acc.close++
        break
      case "[":
        acc.squareOpen++
        break
      case "]":
        acc.squareClose++
        break
      case "<":
        acc.angleOpen++
        break
      case ">":
        acc.angleClose++
        break
    }

    return acc
  }, bracketsInit)

  const getClosingBracketLogic = () => {
    if (input.indexOf("<") >= 0 && input[input.indexOf("<") + 1] !== ">") {
      return false
    }

    if (input.includes(")") && !(input.slice(-1) === ")")) {
      return false
    }

    return true
  }

  return (
    bracketsCount.open === bracketsCount.close &&
    bracketsCount.squareOpen === bracketsCount.squareClose &&
    bracketsCount.angleOpen === bracketsCount.angleClose &&
    getClosingBracketLogic()
  )
}
