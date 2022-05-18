// Assignment code here
var letters = "abcdefghijklmnopqrstuvwxyz";
var LETTERS = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
var numbers = "1234567890";
var characters = "!.@.#,&,(,),<,>,%";

var password = {
  x + 
}







// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

//setting password length

var passwordLength = function getRandomInt(min, max) {
  min = Math.ceil(8);
  max = Math.floor(128);
  return Math.floor(mathRandom() * (max - min + 1) + min);
}
var passwordLength = "";
while (passwordLength === "" || passwordLength === null) {
  passwordLength = prompt('How long would you like your password to be?');
}


//asking if lowercase letters should be included

var lowercasePrompt = window.confirm("Would you like to include lowercase letters?");

if (confirm("OK") == true) {
  letters = { a };
}
else {
  (confirm("cancel") == false)
  letters = { b };


}


//asking if uppercase letters should be included

var lowercasePrompt = window.confirm("Would you like to include uppercase letters?");

if (confirm("OK") == true) {
  LETTERS = { c };
}
else {
  (confirm("cancel") == false)
  LETTERS = { d };
}


//asking if numbers should be included

var lowercasePrompt = window.confirm("Would you like to include numbers?");

if (confirm("OK") == true) {
  numbers = { d };
}
else {
  (confirm("cancel") == false)
  numbers = { e };
}



//asking if special characters should be included

var lowercasePrompt = window.confirm("Would you like to include special characters?");

if (confirm("OK") == true) {
  characters = { f };
}
else {
  (confirm("cancel") == false)
  characters = { g };










// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// document.getElementById("btn").generateBtn.addEventListener("click");
