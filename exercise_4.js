const inputNumber = prompt("write a number");
const number = Number(inputNumber);

let total = 0;

for (let customNumber = 1; customNumber <= inputNumber; customNumber++) {
    total += customNumber;
}

console.log(`The sum of 1 to ${inputNumber} is ${total}`);
