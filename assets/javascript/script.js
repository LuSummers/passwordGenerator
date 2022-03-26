
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
    var passwordLength = parseInt(window.prompt("How many characters would you like to make your password?"))
    
//ensures that password length is at least 8 characters and no more than 128 characters.
//also requires the length of password input being only numerical value
if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
        alert("Please select a password length between 8 - 128 charcters!");
        return;
    }
    // prompts to help with the requests for password character types used
    var isLower = confirm("Would you like to use lowercase letters?")
    var isUpper = confirm("Would you like to use uppercase letters?")
    var isNumber = confirm("Would you like to use numbers?")
    var isSpecialCharacter = confirm("Would you like to use special characters?")

//ensures that at least one character type is used ie. all lowercase or mixed variables

if (isLower=== false && isUpper=== false && isNumber === false && isSpecialCharacter === false) {
    alert("Please select at least 1 character type")
    return;
}

var returnobj = {passwordLength, isLower, isUpper, isNumber, isSpecialCharacter}

    return returnobj
}
// password function options for the possible array

function writePassword() {
    var possiblearray = [];
    var password = "";

    var passwordUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // split uppercase array into substrings
    var upperArr = passwordUpperCase.split("")

    var passwordLowerCase = "abcdefghijklmnopqrstuvwxyz"
    // split lower case array into substrings
    var lowerArr= passwordLowerCase.split ("")

    var passwordSpecialCharacters = "!@#$%^&*()_-?"
    // split special characters array into substrings
    var specialArr= passwordSpecialCharacters.split ("")

    var passwordNumbers = "0123456789"
    // split number array into substrings
    var numArr =passwordNumbers.split ("")

    var options = generatePassword();

    // if OK is selected in prompt to use lower, upper, special, and or numerical values possible arrys
   if (options.isLower=== true){ possiblearray= possiblearray.concat(lowerArr)}
   if (options.isUpper=== true){ possiblearray= possiblearray.concat(upperArr)}
   if (options.isNumber=== true){ possiblearray= possiblearray.concat(numArr)}
   if (options.isSpecialCharacter=== true){ possiblearray= possiblearray.concat(specialArr)}

    var passwordText = document.querySelector("#password");

    for (var i = 0; i < options.passwordLength; i++) {
     var randomNumber = Math.floor(Math.random() * possiblearray.length);
   var digit= possiblearray [randomNumber]
   password +=digit
    }   


    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
