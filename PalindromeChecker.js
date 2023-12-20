function palindromeChecker(string) {
  let arrString = string.split("");
  var reverseStringArr = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reverseStringArr.push(arrString[i]);
  }
  let reverseString = reverseStringArr.join("");
  if (reverseString === string) {
    console.log(`${string} is Palindrome`);
  } else {
    console.log(`${string} is not Palindrome`);
  }
}

palindromeChecker("121");



  