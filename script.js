var input = {};
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var special = "~!@#";
var button = document.getElementById("generate");

button.addEventListener("click", function () {
  var charLength = parseInt(
    prompt("Enter how many characters you want your password to be.")
  );
  if (charLength > 7 && charLength < 30) {
    promptUser();
  } else {
    alert("Must be between 8 and 30 characters.");
  }
  console.log(charLength);

  function promptUser() {
    var numChar = confirm(
      "Would you like numbers? Press OK for yes, Cancel to skip."
    );
    var lowerChar = confirm(
      "Would you like lowercase characters? Press OK for yes, Cancel to skip."
    );
    var upperChar = confirm(
      "Would you like uppercase characters? Press OK for yes, Cancel to skip."
    );
    var specialChar = confirm(
      "Would you like special characters? Press OK for yes, Cancel to skip."
    );

    if (numChar) {
      input["num"] = num;
    } else if (!numChar) {
      !input["num"];
    }

    if (lowerChar) {
      input["lower"] = lower;
    } else if (!lowerChar) {
      !input["lower"];
    }
    if (upperChar) {
      input["upper"] = upper;
    } else if (!upperChar) {
      !input["upper"];
    }
    if (specialChar) {
      input["special"] = special;
    } else if (!specialChar) {
      !input["special"];
    }
    if (!numChar && !specialChar && !upperChar && !lowerChar) {
      alert("Please try again.");
    }
    console.log(input);
  }

  function generatePassword() {
    let finalPW = "";
    for (var i = 0; i < charLength; i++) {
      let passwordChar = Object.keys(input);
      let randomEl =
        passwordChar[Math.floor(Math.random() * passwordChar.length)];
      let char = getRandomCharacter(input[randomEl]);
      finalPW += char;
      console.log("RandomCharacter", char);
      console.log(finalPW, finalPW.length);
    }
    return finalPW;
  }
  function getRandomCharacter(str) {
    return str[Math.floor(Math.random() * str.length)];
  }
  generatePassword();
  password.innerHTML = generatePassword();
});
