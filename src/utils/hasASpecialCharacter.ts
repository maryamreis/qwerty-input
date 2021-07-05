import { isSpecialCharacter } from "./isSpecialCharacter";

export function hasASpecialCharacter(word: string): boolean {
  for (const character of word) {
    if (isSpecialCharacter(character)) {
      return true
    }
  }
  return false
}