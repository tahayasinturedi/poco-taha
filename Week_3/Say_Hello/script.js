/*let myName = "Taha"

window.alert("Hello " + myName);



let userName = prompt ("Please enter your name: ");

if( userName == ""|| !userName){ 
    alert("Hello stranger!");
}else{
    alert("Hello " + userName);
    console.log("Hello " + userName);
}

let numbers = 123;
let strNumbers = "123";

console.log(numbers=strNumbers);

let myAge = 25;
let userAge = +prompt ("Please enter your age: ");

if( myAge === userAge){
    alert("Hurrah, you are as old as me!");
}else if(myAge > userAge) {
    alert("Congrats! You are younger.");
}else if(myAge < userAge) {
    alert("Poor you, you are soooo ooold!");
}else{
    alert("You didn't enter. What is wrong?");
} */

function greetWithName() {
    let myName = "Taha";
    window.alert("Hello " + myName);
}

function greetUser() {
    let userName = prompt("Please enter your name:");
    if (!userName || userName === "") {
        alert("Hello stranger!");
    } else {
        alert("Hello " + userName);
        console.log("Hello " + userName);
    }
}

function compareAges() {
    let myAge = 25;
    let userAge = +prompt("Please enter your age:");
    if (myAge === userAge) {
        alert("Hurrah, you are as old as me!");
    } else if (myAge > userAge) {
        alert("Congrats! You are younger.");
    } else if (myAge < userAge) {
        alert("Poor you, you are soooo ooold!");
    } else {
        alert("You didn't enter. What is wrong?");
    }
}

function compareNumbers() {
    let numbers = 123;
    let strNumbers = "123";
    console.log(numbers === strNumbers);
}

greetWithName();
greetUser();
compareAges();
compareNumbers();
