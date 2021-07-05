export function isSpecialCharacter(character: string): boolean {
    const special = ['!', '?', '£'];
    return special.includes(character);
  }