/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();

  let cleanStr = "";
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "0" && str[i] <= "9")) {
      cleanStr += str[i];
    }
  }

  return cleanStr === cleanStr.split("").reverse().join("");
}

module.exports = isPalindrome;
