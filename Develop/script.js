// Assignment code here
var letters = "abcdefghijklmnopqrstuvwxyz";
var LETTERS = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
var numbers = "1234567890";
var characters = "!.@.#,&,(,),<,>,%";


// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

  //asking if lowercase letters should be included

{
    var lowercasePrompt = window.confirm("Would you like to include lowercase letters?");
    
    if (confirm("OK") == true) {
      while (true){

        lowercase = letters;
        }

    }else {
      (confirm("cancel") == false)

     } 

  
  

      //asking if uppercase letters should be included

   var uppercasePrompt = window.confirm("Would you like to include uppercase letters?");

        if (confirm("OK") == true) {
          while (true){
            uppercase = LETTERS
            }
        } else {
            (confirm("cancel") == false)
        } 


         //asking if numbers should be included

     var numbersPrompt = window.confirm("Would you like to include numbers?");

      if (confirm("OK") == true) {
        while (true){
          numerical = numbers 
         }
      }
        else {
         (confirm("cancel") == false)

        }
   


       //asking if special characters should be included

        var characterPrompt = window.confirm("Would you like to include special characters?");

      if (confirm("OK") == true) {
        while  (true) {
          info = characters
         }
      }
      else {
        (confirm("cancel") == false)
      }
     

  

      //setting password length
  
      var passwordLength = window.prompt('How long would you like your password to be?');

      var x = parseInt("8");
      var y = parseInt("128");

      if (passwordLength => x || passwordLength <= y) {
        window.alert("Good choice.");
        passwordLength = input
      }
      else {
        ("Please try again")
      }

}
      //  function generatePassword(){
      //  for (var i=0; i = passwordLength){
      //   Math.floor(Math.random() * lowercase.length);
      //   Math.floor(Math.random() * uppercase.length);
      //   Math.floor(Math.random() * numerical.length);
      //   Math.floor(Math.random() * info.length);
      //  }

  // var generatePassword = function () {


  // // Write password to the #password input
  // function writePassword() {

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");


  //  

  //   }

  //  


  // Add event listener to generate button
  // document.getElementById("btn").generateBtn.addEventListener("click")


