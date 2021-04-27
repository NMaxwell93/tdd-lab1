function translateToPig(word) {
  let vowels = ["a", "e", "i", "o", "u"];
  let newWord = "";
  word = word.toLowerCase();

  if (vowels.indexOf(word[0]) > -1) {
    newWord = word + "way";
    return newWord;
  } else {
    let firstLetter = word.match(/[aeiou]/g) || 0;
    let vowel = word.indexOf(firstLetter[0]);
    newWord = word.substring(vowel) + word.substring(0, vowel) + "ay";
    return newWord;
  }
}

module.exports.translateToPig = translateToPig;