import { hasASpcialCharacter } from "../utils/hasASpecialCharacter";
import { hasAVowel } from "../utils/hasAVowel"

interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match('q');
  const containsSpecialCharacter = hasASpcialCharacter(wordToDescribe)

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {containsSpecialCharacter && <li>Constaing a special character</li>}
    </ul>
  )
}

export default WordDescription