var slider = document.getElementById("len");
var outputl = document.getElementById("outputlength");
let add = document.getElementById("add");
let num_check = document.getElementById("num");
let sym_check = document.getElementById("sym");
let recreate = document.getElementById("recreat");
const up_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const low_alphabet = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
class GPassword {
    constructor(low_alphabet, up_alphabet, numbers, symbols) {
        this.numbers = numbers;
        this.symbols = symbols;
        this.up_alphabet = up_alphabet;
        this.low_alphabet = low_alphabet;
    }
    rnum() {
        let r = Math.floor(Math.random() * this.numbers.length);
        return this.numbers[r];
    }
    rsym() {
        let r = Math.floor(Math.random() * this.symbols.length);
        return this.symbols[r];
    }
    rupa() {
        let r = Math.floor(Math.random() * this.up_alphabet.length);
        return this.up_alphabet[r];
    }
    rlowa() {
        let r = Math.floor(Math.random() * this.low_alphabet.length);
        return this.low_alphabet[r];
    }

}
function getpass() {
    let pass = "";
    let len = slider.value;
    let gpass = new GPassword(low_alphabet, up_alphabet, numbers, symbols);
    if (num_check.checked == true && sym_check.checked == true) {
        for (let i = 0; i < len; i++) {
            let r = Math.floor(Math.random() * 4);
            if (r == 0) {
                pass += gpass.rnum();
            } else if (r == 1) {
                pass += gpass.rsym();
            } else if (r == 2) {
                pass += gpass.rupa();
            } else if (r == 3) {
                pass += gpass.rlowa();
            }
        }
        return pass;
    }
    else if (num_check.checked == true && sym_check.checked == false) {
        for (let i = 0; i < len; i++) {
            let r = Math.floor(Math.random() * 3);
            if (r == 0) {
                pass += gpass.rnum();
            } else if (r == 1) {
                pass += gpass.rupa();
            } else if (r == 2) {
                pass += gpass.rlowa();
            }
        }
        return pass;
    }
    else if (num_check.checked == false && sym_check.checked == true) {
        for (let i = 0; i < len; i++) {
            let r = Math.floor(Math.random() * 3);
            if (r == 0) {
                pass += gpass.rsym();
            } else if (r == 1) {
                pass += gpass.rupa();
            } else if (r == 2) {
                pass += gpass.rlowa();
            }
        }
        return pass;

    }
    else if (num_check.checked == false && sym_check.checked == false) {
        for (let i = 0; i < len; i++) {
            let r = Math.floor(Math.random() * 2);
            if (r == 0) {
                pass += gpass.rupa();
            } else if (r == 1) {
                pass += gpass.rlowa();
            }
        }
        return pass;
    }
}
let GPass = new GPassword(low_alphabet, up_alphabet, numbers, symbols);
outputl.innerHTML = slider.value; // Display the default slider value 
// Update the current slider value (each time you drag the slider handle
slider.oninput = function () {
    outputl.innerHTML = this.value;
    getpass();
    let pass = getpass();
    add.innerHTML = pass;
}
window.onload = function () {
    let pass = getpass();
    add.innerHTML = pass;
    var element = document.getElementById("mode");
        if (localStorage.getItem("theme") == "dark") {
            element.classList.add("dark");
        }
        else {
            element.classList.remove("dark");
        }
}
recreate.onclick = function () {
    let pass = getpass();
    add.innerHTML = pass;
}
//making the copy to clipboard on click
function copyf() {
    let copyText = add.innerHTML;
    navigator.clipboard.writeText(copyText);
}
function navclick() {
    var element = document.getElementById("mobv");
    // if hidden class is present then remove it
    if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
    }
    // if hidden class is not present then add it
    else {
        element.classList.add("hidden");
    }
  }
  function themechange() {
    var element = document.getElementById("mode");
    localStorage.setItem("theme", "dark");
    if (element.classList.contains("dark")) {
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
    else {
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
    }
  