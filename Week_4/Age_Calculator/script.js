let birthYearCorrect = false;
let birthYear = +prompt("Enter Your Birth Year: ");

while(!birthYearCorrect){
    if(birthYear === " " || birthYear == 0 || isNaN(birthYear)){
        birthYear = +prompt("Heyy! Do you want to try again?");
    } else {
        birthYearCorrect = true;
    }
}
let futureYearCorrect = false;
let futureYear = +prompt("Enter your future year: ");
while(!futureYearCorrect){
    if(futureYear === " " || futureYear == 0 || isNaN(futureYear)){
        futureYear = +prompt("Heyy! Do you want to try again?");
    } else {
        futureYearCorrect = true;
    }
}

let yourAge = futureYear - birthYear;
let possibleAge = yourAge-1;

console.log("You will be either " +possibleAge +" or "+ yourAge+" in "+futureYear);
