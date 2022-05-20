function generatePassword() {
  // Assignment code here
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var LETTERS = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
  var numbers = "1234567890";
  var characters = "!.@.#,&,(,),<,>,%";


  // Get references to the #generate element


  //asking if lowercase letters should be included
  var userSelections = ""


  var lowercasePrompt = window.confirm("Would you like to include lowercase letters?")

  if (lowercasePrompt) {
    userSelections = userSelections + letters

  }





  //asking if uppercase letters should be included

  var uppercasePrompt = window.confirm("Would you like to include uppercase letters?");

  if (confirm("OK") == true) {
    while (true) {
      uppercase = LETTERS
      break;
    }
  } else {
    (confirm("cancel") == false)
  }


  //asking if numbers should be included

  var numbersPrompt = window.confirm("Would you like to include numbers?");

  if (confirm("OK") == true) {
    while (true) {
      numerical = numbers
      break;
    }
  }
  else {
    (confirm("cancel") == false)

  }



  //asking if special characters should be included

  var characterPrompt = window.confirm("Would you like to include special characters?");

  if (confirm("OK") == true) {
    while (true) {
      info = characters
      break;
    }
  }
  else {
    (confirm("cancel") == false)
  }




  //setting password length

  var passwordLength = window.prompt('How long would you like your password to be?');
  passwordLength = Number.parseInt(passwordLength, 10)

  var minPasswordlength = 8;
  var maxPasswordlength = 128;

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
  // // Write password to the #password input



  return password
}






var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  var password = generatePassword()
  var passwordDislplay = document.querySelector("#password")
  passwordDislplay.textContent = password
})

