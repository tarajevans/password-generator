// Assignment code here

function generatePassword () {

//create variable
var lowerCase=false;
var upperCase=false;
var number=false;
var symbol=false;

var lowerCaseChar="abcdefghijklmnopqrstuvwxyz";
var upperCaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar="0123456789";
var symbolChar=" !\"#$%&()*+-./:;<>=?@[]^_`{}|~'\\";

var includedChar="";
var length=0;
var newPassword;

//declare variable
lowerCase = confirm("Do you want to include lower case letters? \n\n OK = Yes, Cancel = No");
upperCase = confirm("Do you want to include upper case letters? \n\n OK = Yes, Cancel = No");
number = confirm("Do you want to include numbers? \n\n OK = Yes, Cancel = No ");
symbol = confirm("Do you want to include special characters? \n\n OK = Yes, Cancel = No");
length = prompt("How many characters would you like to include? Must be between 8 and 128");

//assemble included characters
if (lowerCase == true) {
  includedChar += lowerCaseChar;
}
if (upperCase == true) {
  includedChar += upperCaseChar;
}
if (number == true) {
  includedChar += numberChar;
}
if (symbol == true) {
  includedChar += symbolChar;
}

//create password
newPassword=createPassword (length, includedChar);
return newPassword;
}

function createPassword (pwLength, trueChar) {
var result           = "";
var characters       = trueChar;
var charactersLength = characters.length;
for ( var i = 0; i < pwLength; i++ ) {
  result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
}
return result;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
