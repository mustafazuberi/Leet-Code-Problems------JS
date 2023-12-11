// SOLVED
function lengthOfLastWord(s) {
  const trimmedWord = s.trim();
  const splitted = trimmedWord.split(" ");
  const lastWord = splitted[splitted.length - 1];
  return lastWord.length;
}

const result = lengthOfLastWord("   fly me   to   the moon  ");
console.log(result);
