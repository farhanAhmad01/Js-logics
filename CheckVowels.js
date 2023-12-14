function checkVowels(string) {
  let noSpaceString = string.toLowerCase().split("");
    console.log(noSpaceString);
  let countVowels = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < noSpaceString.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if (noSpaceString[i].includes(vowel[j])) {
        countVowels = countVowels + 1;
      }
    }
  }
  return countVowels;
}

console.log(checkVowels("Hello my name is "));
