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
  return special[Math.floor(Math.random() * symbols.length)];
}

// Get the values needed to generate password
generateBtn.addEventListener('click', () -> {
  const passwordLength = passwordLength.value,
  const hasLower = lower.confirm,
  const hasUpper = upper.confirm,
  const hasSpecial = special.confirm, 
  const hasNumber = number.confirm,
});

// Generate password function 
  // Filter out the types needed for the password 
  
  // Loop over the length for each type until reached password length 

// Combine the variety count in the password
const varietyCount = lower + upper + number + symbol; 

// if count is zero return nothing in generate password. 
if (varietyCount < 1) {
  generatePassword = ("");
}

  // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Connect the html button to Javascript 

//Password requirements 


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
//Prompt to include uppercase letters. 
var uppercase = window.confirm("Do you want uppercase letters in your password?")
//Confirm yes or no to uppercase letters. 
if (uppercase.confirm === true) {
  hasUpper
}
//Prompt to include numeric letters. 
var number = window.confirm("Do you want to include numbers in your password?")
//Confirm yes or no to include numeric letters. 
if (number.confirm === true) {
  hasNumber
}
//Prompt to include special characters 
var special = window.confirm("Do you want to include special characters in your password?")
//Confirm yes or no to include special characters. 
if (special.confirm === true) {
  hasSpecial
}
//Random function to generate password. 

//Display password on the website. 