// Array of each character is listed below in order for them to be able to be checked
var special = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}',']','[','~','-','_','.',];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

function askOptions() {
    var passLength = parseInt(
        prompt('How long do you want your password to be?'),
        10
    );

    if (Number.isNaN(length)) {
        alert('Your password must be a number');
        return null;
    }

    if (passLength < 8) {
        alert('Your password must be AT LEAST 8 characters');
        return null;
    }

    if (passLength > 128) {
        alert('Your password must be AT LEAST 8 characters');
        return null;
    }

    var passOptions = {
        passLength: passLength
    };

    return passOptions;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }

function passMake() {
    var options = askOptions();
    var result = [];
}

askOptions();