// console.log(`User Input Methods in JavaScript`)

// let userName = window.prompt(`What's your name?`);
// console.log(userName)

let myName;

document.getElementById(`myButton`).onclick = function () {
    myName = document.getElementById(`myText`).value;
    console.log(myName);
    document.getElementById(`Welcome-message`).innerHTML = `Welcome ` + myName;

}