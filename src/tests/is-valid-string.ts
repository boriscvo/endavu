export default function isValidString(input: string): boolean {
  // Assumptions based on arrays' structure:
  // - Must be equal number of brackets, order not important except for:
  // -- If ")" exists it must be at the end of the string
  // -- If "<" exists it must be followed by ">"; no nesting for angles

  const REGULAR_ENDING_BRACKET = ")"
  const ANGLE_OPEN_BRACKET = "<"
  const ANGLE_CLOSE_BRACKET = ">"

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
    if (
      input.includes(ANGLE_OPEN_BRACKET) &&
      input[input.indexOf(ANGLE_OPEN_BRACKET) + 1] !== ANGLE_CLOSE_BRACKET
    ) {
      return false
    }

    if (
      input.includes(REGULAR_ENDING_BRACKET) &&
      !(input.slice(-1) === REGULAR_ENDING_BRACKET)
    ) {
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
