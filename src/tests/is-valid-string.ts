export default function isValidString(input: string): boolean {
  const REGULAR_OPEN_BRACKET = "("
  const REGULAR_CLOSE_BRACKET = ")"
  const ANGLE_OPEN_BRACKET = "<"
  const ANGLE_CLOSE_BRACKET = ">"
  const SQUARED_OPEN_BRACKET = "["
  const SQUARED_CLOSE_BRACKET = "]"

  const OPEN_BRACKETS = [
    REGULAR_OPEN_BRACKET,
    ANGLE_OPEN_BRACKET,
    SQUARED_OPEN_BRACKET,
  ]

  type InitBracketsSplit = { char: string; order: number }

  const initBracketsSplit: {
    opening: InitBracketsSplit[]
    closing: InitBracketsSplit[]
  } = {
    opening: [],
    closing: [],
  }

  const areMatchingChars = (
    opening: InitBracketsSplit,
    closing: InitBracketsSplit
  ) => {
    if (
      opening.char === REGULAR_OPEN_BRACKET &&
      closing.char === REGULAR_CLOSE_BRACKET
    ) {
      return true
    }
    if (
      opening.char === ANGLE_OPEN_BRACKET &&
      closing.char === ANGLE_CLOSE_BRACKET
    ) {
      return true
    }
    if (
      opening.char === SQUARED_OPEN_BRACKET &&
      closing.char === SQUARED_CLOSE_BRACKET
    ) {
      return true
    }
    return false
  }

  const bracketsSplit = input.split("").reduce((acc, char, i) => {
    if (OPEN_BRACKETS.includes(char)) {
      acc.opening.push({
        char,
        order: i,
      })
    } else {
      acc.closing.push({
        char,
        order: i,
      })
    }
    return acc
  }, initBracketsSplit)

  const areBracketsMatching = bracketsSplit.closing.every((bracket, i) => {
    const openingUntil = bracketsSplit.opening.filter(
      (el) => el.order < bracket.order
    )

    if (!openingUntil.length || openingUntil.length - 1 - i < 0) {
      return false
    }

    // immediate or nested matching brackets
    return !!(
      areMatchingChars(openingUntil[openingUntil.length - 1], bracket) ||
      areMatchingChars(openingUntil[openingUntil.length - 1 - i], bracket)
    )
  })

  return (
    areBracketsMatching &&
    bracketsSplit.opening.length === bracketsSplit.closing.length
  )
}
