let inputNumber = prompt ("Enter a number between 0-20 : ");
let isBetween0to20 = false;

while(!isBetween0to20){
    if(inputNumber>0 && inputNumber <=20){
        isBetween0to20 = true;
    } else {
        inputNumber = prompt (" Please write a valid input!")
        continue
    }
    if(inputNumber%2===0){
        alert("The number is EVEN!!")
    }else {
        alert("The number is ODD!!")
    }
}
