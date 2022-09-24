// Assignment Code
var LowerC = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var UpperC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var special = ["!","@","#","$","%","&","*","(",")","_","+","?","<",">"];


function getPasswordOptions(){
  var length = parseInt(
    prompt("How Many characters would you like Password to contain?"),
        10
  );
  if(Number.isNaN(length)){
    alert("password length must be provided as a number")
    return null;
  }
  if (length < 8){
    alert("Password length must be at least 8 characters")
    return null;
  } 
  if (length > 128){
    alert("Password cannot be longer than 128 characters")
    return null;
  }
  
  var hasLowerCase = confirm("Click ok if you would like Lower Case characters");
  var hasUpperCase = confirm("Click ok if you would like Upper Case characters");
  var hasNumbers = confirm("Click ok if you would like numbers");
  var hasSpecial = confirm("Click ok if you would like special characters");
  

  
  if(
    hasLowerCase === false && 
    hasUpperCase === false &&
    hasNumbers === false &&
    hasSpecial === false 
  ){
    alert("Must select at least one character type")
    return null;
  }

  var passwordOptions = {
    length: length, 
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
    hasSpecial: hasSpecial
  }
    return passwordOptions;
};

  function getRandom(arr){
      var randomIndex = Math.floor(Math.random() * arr.length);
      var randomElement = arr[randomIndex];
      console.log("check", randomElement)
      return randomElement;
  }

    function generatePassword(){
        var options = getPasswordOptions();
        var result =[];
        var possibleCharacters =[];
        var gauranteedCharacters =[];
        
        if(!options) return null;
        if(options.hasLowerCase){
          possibleCharacters = possibleCharacters.concat(LowerC);
          gauranteedCharacters.push(getRandom(LowerC));
        }
        if (options.hasUpperCase){
            possibleCharacters = possibleCharacters.concat(UpperC);
            gauranteedCharacters.push(getRandom(UpperC));
        }
        if (options.hasNumbers){
          possibleCharacters = possibleCharacters.concat(numbers);
          gauranteedCharacters.push(getRandom(numbers));
      }
      if (options.hasSpecial){
        possibleCharacters = possibleCharacters.concat(special);
        gauranteedCharacters.push(getRandom(special));
      }
      
      for(var i = 0; i<options.length; i++){
        var possibleCharacter = getRandom(possibleCharacters);
        result.push(possibleCharacter)
    }
      for(var i = 0; i <gauranteedCharacters.length; i++){
        result[i] = gauranteedCharacters[i]
      }  
      return result.join("");

    }


var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
  




 
  
 