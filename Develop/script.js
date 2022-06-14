// Assignment code here

function generatePassword () {

//create variable
var lowerCase=false;
var upperCase=false;
var number=false;
var symbol=false;
var lenth;

//declare variable
lowerCase=confirm("Do you want to include lower case letters? \n\n OK = Yes, Cancel = No");
upperCase=confirm("Do you want to include upper case letters? \n\n OK = Yes, Cancel = No");
number=confirm("Do you want to include numbers? \n\n OK = Yes, Cancel = No ");
symbol=confirm("Do you want to include special characters? \n\n OK = Yes, Cancel = No");

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
