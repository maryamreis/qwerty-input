import { hasALowerCaseCharacter } from "../utils/hasALowerCase";
import { hasASpecialCharacter } from "../utils/hasASpecialCharacter";
import { hasAVowel } from "../utils/hasAVowel";
import { isInputStrong } from "../utils/isInputStrong"


interface WordDescriptionProps {
  wordToDescribe: string;
}

function WordDescription({ wordToDescribe }: WordDescriptionProps): JSX.Element {
  const hasAtLeastFiveCharacters = wordToDescribe.length > 5;
  const containsAVowel = hasAVowel(wordToDescribe);
  const hasTheLetterQ = wordToDescribe.toLowerCase().match('q');
  const containsSpecialCharacter = hasASpecialCharacter(wordToDescribe)
  // "impressively strong input!" when:
  //- the input is at least 7 characters in length
  // - it has at least one uppercase character
  // - it has at least one lowercase character
  const istheInputStrong = isInputStrong(wordToDescribe)

  return (
    <ul>
      {hasAtLeastFiveCharacters && <li>Has at least five characters</li>}
      {containsAVowel && <li>Contains a vowel</li>}
      {hasTheLetterQ && <li>Contains the letter Q</li>}
      {containsSpecialCharacter && <li>Constaing a special character</li>}
      {istheInputStrong && <li>Impressively Strong Input!</li>}
    </ul>
  )
}

export default WordDescription