var generate = document.querySelector("#button");
var passOut = document.querySelector("#password");

function generatePass() {
    var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
    var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
    var special = ['@','%','+','/',"'",'!','#','$','^','?',':',',',')','(','}',']','[','~','-','_','.',];
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

    var characterArray = [];

    var passLength = 12;
    var passLength = prompt("Please enter the password length between 8 and 128");

    var adLC = false;
    var adLC = confirm("Would you like to add lower case characters?");
    if (adLC) {
        characterArray = characterArray.concat(lowerCase);
    }

    var addUC = false;
    var addUC = confirm("Would you like to add upper case characters?");
    if (addUC) {
        characterArray = characterArray.concat(upperCase);
    }

    var addS = false;
    var addS = confirm("Would you like to add special characters?");
    if (addS) {
        characterArray = characterArray.concat(special);
    }

    var addN = false;
    var addN = confirm("Would you like to add numbers?");
    if (addN) {
        characterArray = characterArray.concat(numbers);
    }

    var newPassword = "";
     console.log(characterArray);
    for (var i = 0; i < passLength; i++) {
        var randomise = Math.floor(Math.random() * characterArray.length);
        newPassword += characterArray[randomise];
    }
return newPassword;
}

function write() {
    var password = generatePass();
    passOut.value = password;
}

generate.addEventListener("click", write);
