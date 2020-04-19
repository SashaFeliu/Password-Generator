// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  //

  function writePassword(pLength) {
    var letters = "abcdefghijklmnopqrstuvwxyz",
      numbers = "123456789",
      characters = "!@#_",
      password = "";
    var len = Math.ceil(pLength / 2);
    len = len - 1;
    var characters = pLength - 2 * len;

    for (i = 0; i < len; i++) {
      password += letters.charAt(Math.floor(Math.random() * letters.length));
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    for (i = 0; i < lcharacters; i++)
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );

    password = password
      .split("")
      .sort(function() {
        return 0.5 - Math.random();
      })
      .join("");

    return password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  {
    document.getElementById("generate").innerHTML = "Generate Password";
  }
}
