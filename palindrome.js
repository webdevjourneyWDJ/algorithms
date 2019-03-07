/**
* racecar --> 7
* Madam, I'm Adam -> madamimadam
* Amy, must I jujitsu my ma?
* A man, a plan, a canal. Panama
**/

function isPalindrome(string) {
  var regx = /[\W_]/g;
  string = string.toLowerCase().replace(regx, "");
  var len = string.length;
  for(var i=0; i < len/2; i++){
    if(string[i] !== string[len-1-i]){
      return false;
    }
  }
  return true;
}

function isPalindrome(string) {
  string = string.toLowerCase();
  var validChars = 'abcdefghijklmnopqrstuvwxyz'.split("");
  var stringCharArr = string.split("");

  var letterArr = [];

  stringCharArr.forEach(char => {
    if(validChars.indexOf(char) > -1) letterArr.push(char);
  });

  return letterArr.join("") === letterArr.reverse().join("");
}

function isPalindrome(string) {
  var regx = /[^A-Za-z0-9]/g;
  var lowRegStr = string.toLowerCase().replace(regx, "");
  var reverseString = lowRegStr.split('').reverse().join('');
  return reverseString === lowRegStr;
}

 console.log(isPalindrome("A man, a plan, a canal. Panama"));
 console.log(isPalindrome("Amy, must I jujitsu my ma?"));
