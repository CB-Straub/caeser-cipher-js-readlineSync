const readlineSync = require('readline-sync');




const input = readlineSync.question('What phrase would you like to encrypt?').toLowerCase();

const shift = parseInt(readlineSync.question('How many letters would you like to shif?'));

const caeserCipher = (input, shift) => {
     let result = "", code;
    for (let i = 0; i < input.length; i++ ) {
        if (input.charCodeAt(i) >= 65 && input.charCodeAt(i)<=90) {
            code = (((input.charCodeAt(i)-65)+shift)%26)+65;
        }
        else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) {
            code = (((input.charCodeAt(i)-97)+shift)%26)+97;
        }
        else if (input.charCodeAt(i) === 32) {
            code = 32
        }
         result+=String.fromCharCode(code);
    }

        return result; 
     
       
}

console.log(caeserCipher(input, shift))
    

   