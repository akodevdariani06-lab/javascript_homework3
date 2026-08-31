const input = prompt("type a text").trim().toLowerCase();
let vowel = 0;

for (let rampage = 0; rampage < input.length; rampage +=1) {
    const char = input[rampage];
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") 
        {vowel += 1;}
}

console.log(`"${input}" has ${vowel} vowels out of ${input.length} letters.`);