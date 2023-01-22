const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

let password_length = 15

let password1_EL = document.getElementById('password1')
let password2_EL = document.getElementById('password2')

let passwordbox_1_EL = document.getElementById('password_box1')
let passwordbox_2_EL = document.getElementById('password_box2')

// generates two passwords of the set password length
function generate_password() {

    let password1 = ""
    let password2 = ""

    let random_numbers1 = []
    let random_numbers2 = []


    for (let i = 0; i < password_length; i++) {
        random_numbers1.push(Math.floor(Math.random() * characters.length))
        random_numbers2.push(Math.floor(Math.random() * characters.length))
    }
    for (let i = 0; i < password_length; i++) {
        password1 += characters[random_numbers1[i]]
        password2 += characters[random_numbers2[i]]
    }

    passwordbox_1_EL.textContent = password1
    passwordbox_2_EL.textContent = password2
}

// copies the password in box 1
function copy1() {
    let copyText = document.getElementById('password_box1').textContent;
    navigator.clipboard.writeText(copyText)
}

// copies the password in box 2
function copy2() {
    let copyText = document.getElementById('password_box2').textContent;
    navigator.clipboard.writeText(copyText)
}