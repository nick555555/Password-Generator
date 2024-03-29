//DON'T TOUCH THIS CODE! This code is adding click handlers and DOM manipulation to the page.  Edit the generatePassword function and all should work properly.
// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//this function will fire when you click the generate password button on the page.  I've set it to alert "You've clicked a button" and return a password of password for now. Update it to make your password
function generatePassword() {
    //YOUR CODE HERE
    var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var numbArray = ['0','1','2','3','4','5','6','7','8','9'];
    var specArray = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '='];
    var masterArray = [];
    var length = document.getElementById("passwordLength").value;
    var passwordOutput = '';
    if(document.getElementById("lowerCase").checked){
        for (let i = 0; i < lowerArray.length; i++) {
            masterArray.push(lowerArray[i]);
        }
    }
    if(document.getElementById("upperCase").checked){
        for (let i = 0; i < upperArray.length; i++) {
            masterArray.push(upperArray[i]);
        }
    }
    if (document.getElementById("numbers").checked){
        for (let i = 0; i < numbArray.length; i++) {
            masterArray.push(numbArray[i]);
        }
    }
    if (document.getElementById("specialCharacters").checked){
        for (let i = 0; i < specArray.length; i++) {
            masterArray.push(specArray[i]);
        }
    }
    if (length > 128 || length < 8) {
        alert("You must enter a number between 8 and 128.")
    }else{
    for (let i = 0; i < length; i++) {
        var masterArrayIndex = Math.floor(Math.random()*masterArray.length);
        passwordOutput += masterArray[masterArrayIndex];
    }
    }
    if (document.getElementById("lowerCase").checked===false&&document.getElementById("upperCase").checked===false&&document.getElementById("numbers").checked===false&&document.getElementById("specialCharacters").checked===false) {
        alert("You must select at least one character set.");
    }else{
    return passwordOutput;
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    copyBtn.removeAttribute("disabled");
    copyBtn.focus();
}

function copyToClipboard() {
    // BONUS 
    var copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
