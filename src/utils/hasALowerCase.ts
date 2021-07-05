export function hasALowerCaseCharacter(word: string): boolean {
  for (const character of word) {
    if (character === character.toLowerCase()) {
      return true
    }
  }
  return false
}