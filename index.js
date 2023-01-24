const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];

const atoz = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

const AtoZ = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]


let password_length = 15

let password1_EL = document.getElementById('password1')
let password2_EL = document.getElementById('password2')

let passwordbox_1_EL = document.getElementById('password_box1')
let passwordbox_2_EL = document.getElementById('password_box2')

let slider = document.getElementById('slider')
let output = document.getElementById('length')

// gets the input from the slider
function getInput() {
    output.textContent = "Password length: " +  slider.value;
    password_length = slider.value
}


// generates two passwords of the set password length
function generate_password() {

    let password1 = ""
    let password2 = ""

    let random_numbers1 = []
    let random_numbers2 = []

    let uppercaseOP = document.getElementById('uppercaseOP')
    let numbersOP = document.getElementById('numbersOP')
    let symbolsOP = document.getElementById('symbolsOP')

    // the base array that we're going to use to churn out passwords (only lowercase letters at the moment)
    window.newArray = atoz

    // adding the uppercase letters to the array if uppercase is selected
    if (uppercaseOP.checked == true) {
        window.newArray = atoz.concat(AtoZ)
    }

    // adding the numbers to the array if uppercase is selected
    if (numbersOP.checked == true) {
        window.newArray = window.newArray.concat(numbers)
    }

    // adding the symbols to the array if uppercase is selected
    if (symbolsOP.checked == true) {
        window.newArray = window.newArray.concat(symbols)
    }


    // creating an array of random numbers to begin with
    for (let i = 0; i < password_length; i++) {
        random_numbers1.push(Math.floor(Math.random() * window.newArray.length))
        random_numbers2.push(Math.floor(Math.random() * window.newArray.length))

    }

    // converting the random numbers to the letters/digits/symbols that they correspond to
    for (let i = 0; i < password_length; i++) {
        password1 += window.newArray[random_numbers1[i]]
        password2 += window.newArray[random_numbers2[i]]
    }

    // displaying the complete passwords
    passwordbox_1_EL.textContent = password1
    passwordbox_2_EL.textContent = password2

    console.log(window.newArray)
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

