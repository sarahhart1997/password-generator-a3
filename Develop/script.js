// Assignment code here


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

//Prompted for the length of the password. 

//Choose a length of at least 8 characters and less than 128 characters. 

//Prompt to include lowercase letters. 

// Confirm yes or no to lowercase letters. 

//Prompt to include uppercase letters. 

//Confirm yes or no to uppercase letters. 

//Prompt to include numeric letters. 

//Confirm yes or no to include numeric letters. 

//Prompt to include special characters 

//Confirm yes or no to include special characters. 

