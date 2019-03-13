function caesarCipher(text, shift) {
  var result = "";

  for(var i=0; i< text.length; i++){
    var textChar = text.charCodeAt(i);
    if(65 <= textChar && textChar <= 90) result += String.fromCharCode((textChar - 65 + shift) % 26 + 65); //Uppercase
    else if (97 <= textChar && textChar <= 122) result += String.fromCharCode((textChar - 97 + shift) % 26 + 97); //LowerCase
    else result += text.charAt(i);
  }

  return result;
}

function caesarCipher(str,num) {
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';

  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };

  return newString;
}

console.log(caesarCipher('Baby\'s Goat?', 2));
