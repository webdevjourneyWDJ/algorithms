//hello -->  ["h", "e", "l", "l", "o"] -> ["o", "l", "l", "e", "h"] -> olleh

// function reverseWord(string) {
//   return string.split("").reverse().join("");
// }

function reverseWord(string) {
  var newString = "";

  for(var i = string.length - 1; i>=0; i--){
    newString += string[i];
  }

  return newString;
}

console.log(reverseWord("hello world, this is awesome!"));
