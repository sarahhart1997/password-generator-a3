//Base items to be declared for use later

// Functions to make letters/numbers using charcode
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
  const special = '!@#$%^&*(){}[]=+<>/.';
  return special[Math.floor(Math.random() * special.length)];
}

//Making the button have windows appear
var generateBtn = document.querySelector("generate");
generate.onclick = function() {
  getRequirements()
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Get the values needed to generate password
// generateBtn.addEventListener("click", writePassword);

//Password requirements 
function getRequirements() {
//Prompted for the length of the password. 
passwordLength = window.prompt ("How long in characters should your password be?")
//Choose a length of at least 8 characters 
if (passwordLength < 8) {
  alert("Please select a number more than 8.")
}
//and less than 128 characters. 
else if (passwordLength > 128) {
  alert("Please use a number 128 or less")
}
//Prompt to include lowercase letters. 
var lowercase = window.confirm("Do you want lowercase letters in your password?") 
// Confirm yes or no to lowercase letters. 
if (lowercase.confirm === true) {
  hasLower
}
else (lowercase === false), {
}
//Prompt to include uppercase letters. 
var uppercase = window.confirm("Do you want uppercase letters in your password?")
//Confirm yes or no to uppercase letters. 
if (uppercase.confirm === true) {
  hasUpper
}
else (uppercase === false), {
}
//Prompt to include numeric letters. 
var number = window.confirm("Do you want to include numbers in your password?")
//Confirm yes or no to include numeric letters. 
if (number.confirm === true) {
  hasNumber
}
else (number === false), {
}
//Prompt to include special characters 
var special = window.confirm("Do you want to include special characters in your password?")
//Confirm yes or no to include special characters. 
if (special.confirm === true) {
  hasSpecial
}
else (special === false), {
}

// Generate password function 
  // Filter out the types needed for the password 
  if(hasUpper) {
    pickedCharacters += getRandomUpper
  }
  if(hasLower) {
    pickedCharacters += getRandomLower
  }
  if(hasNumber) {
    pickedCharacters += getRandomNumber
  }
  if(hasSpecial) {
    pickedCharacters += getRandomSpecial
  }
  // Loop over the length for each type until reached password length 
  for (var i = 0; i < passwordLength; i++) {
    //determine why we do the variables above in ()
    generatePassword = pickedCharacters.length * passwordLength
  }

  // how to make the number stop at passwordLength and not endlessly loop forever????

// Combine the variety count in the password to determine correct values are chosen.
const varietyCount = hasLower + hasNumber + hasSpecial + hasUpper

// if count is zero return nothing in generate password. 
if (varietyCount < 1) {
  generatePassword = ("You must select at least 1 value.");
}
}
//Display password on the website. 