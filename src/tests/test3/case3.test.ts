import { expect, describe, it } from "vitest"
import isValidString from "../is-valid-string"

const VALID_STRINGS = [
  "",
  "()",
  "(())",
  "()()",
  "(((())()(())))",
  "[(<>)]",
  "([<>])",
  "[]",
  "<>",
  "[[]<>]",
  "[]<>()",
  "[()]",
  "<()>",
  "(<[(<[(<[]>)]>)]>)",
]

const INVALID_STRINGS = [
  ")",
  "(",
  ")(",
  "][",
  "><",
  "(()",
  "())",
  "())(",
  "(((((()()(",
  "[(])",
  "]",
  ">",
  "[>",
  "(((]]]",
  "](",
  "[<]>",
]

describe("Bracket matcher part 2", () => {
  describe("Valid strings", () => {
    VALID_STRINGS.forEach((validString) => {
      it(`should return true for valid string '${validString}'`, () => {
        expect(isValidString(validString)).to.equal(
          true,
          `Incorrectly considered '${validString}' to be invalid`
        )
      })
    })
  })

  describe("Invalid strings", () => {
    INVALID_STRINGS.forEach((invalidString) => {
      it(`should return false for invalid string '${invalidString}'`, () => {
        expect(isValidString(invalidString)).to.equal(
          false,
          `Incorrectly considered '${invalidString}' to be valid`
        )
      })
    })
  })
})
