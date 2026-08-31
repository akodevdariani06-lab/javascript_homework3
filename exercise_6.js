const ageInput = prompt("How old are you?");
const age = Number(ageInput);
const name = prompt("What is your name?").trim().toLowerCase();

if (age < 18) {
    console.log ("sorry, u cant enter");  
}
else if (age >= 21 && name === "maria") {
    console.log ("Welcome, VIP!");
}
else if (age % 2 === 0 || name === "giorgi") {
    console.log("u get a free drink!");   
}
else {
    console.log("welcome, enjoy ur evening!");   
}