export function hasAUpperCaseCharacter(word: string): boolean {
    for (const character of word) {
      if (character === character.toUpperCase()) {
        return true
      }
    }
    return false
  }