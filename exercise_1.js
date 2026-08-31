const askNumber = prompt("write a number");
const number = parseInt(askNumber);

if(number % 2 === 0) {
    console.log(`${number} + is even`); 
} else{
    console.log(`${number} + is odd`);  
}