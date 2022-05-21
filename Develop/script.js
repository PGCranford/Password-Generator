function generatePassword() {
  // Assignment code here
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var LETTERS = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
  var numbers = "1234567890";
  var characters = "!.@.#,&,(,),<,>,%";


  var passwordLength = window.prompt('How long would you like your password to be?');
  passwordLength = Number.parseInt(passwordLength, 10)

  var minPasswordlength = 8;
  var maxPasswordlength = 128;


  // Get references to the #generate element

  var userSelections = ""

  //asking if lowercase letters should be included

  var lowercasePrompt = window.confirm("Would you like to include lowercase letters?")

  if (lowercasePrompt) {
    userSelections = userSelections + letters

  }

  //asking if uppercase letters should be included

  var uppercasePrompt = window.confirm("Would you like to include uppercase letters?");

  if (uppercasePrompt) {
    userSelections = userSelections = LETTERS
  }

  //asking if numbers should be included

  var numbersPrompt = window.confirm("Would you like to include numbers?");

  if (numbersPrompt) {
    userSelections = userSelections = numbers

  }



  //asking if special characters should be included

  var characterPrompt = window.confirm("Would you like to include special characters?");

  if (characterPrompt) {
    userSelections = userSelections + characters
  }

  if (userSelections === "") {
    window.alert("You must include one set of criteria. Please Try again.")
    return
  }

  //setting password length



  var password = ""

  if (!Number.isNaN(passwordLength) && passwordLength >= minPasswordlength && passwordLength <= maxPasswordlength) {

    while (password.length < passwordLength) {
      var randomIndex = Math.floor(Math.random() * userSelections.length);

      var randomCharacter = userSelections.charAt(randomIndex);
      password = password + randomCharacter
    }
  }
  else {
    window.alert("Please try again")
  }


  return password


}



var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  var password = generatePassword()
  var passwordDislplay = document.querySelector("#password")
  passwordDislplay.textContent = password
})
