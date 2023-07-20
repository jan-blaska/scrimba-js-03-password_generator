const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1El = document.querySelector("#password-nb1");
let password2El = document.querySelector("#password-nb2");

function generatePasswords() {
    // clear the previously generated passwords
    password1El.textContent = "";
    password2El.textContent = "";

    // loop over the characters and randomly pick one and put them into the password1 or password2 fields
    for (let i = 0; i < 15; i++) {
        let random1 = Math.floor(Math.random() * characters.length);
        let random2 = Math.floor(Math.random() * characters.length);
        password1El.textContent += characters[random1];
        password2El.textContent += characters[random2];
    }  
}