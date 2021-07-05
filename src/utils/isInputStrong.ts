import { hasALowerCaseCharacter } from "./hasALowerCase"
import { hasASpecialCharacter } from "./hasASpecialCharacter"
import { hasAUpperCaseCharacter } from "./hasAUpperCaseCharacter"

export function isInputStrong(word: string): boolean {
    for (const character of word) {
      if (hasALowerCaseCharacter(word) === true && hasAUpperCaseCharacter(word) === true && word.length > 7 && hasASpecialCharacter(word) === true) {
        return true;
      }
        
    }
      return false;
  }