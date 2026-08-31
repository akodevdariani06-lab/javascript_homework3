const score = prompt("write your score");
const number = Number(score);

if (score > 90) {
    console.log("A");

} else if (80 < score && score < 89) {
    console.log("Youre grad is B");
    
} else if (70 < score && score < 79) {
    console.log("Youre grad is C");
    
} else if (60 < score && score < 69) {
    console.log("Youre grad is D");
    
} else if (50 <score && score < 59) {
    console.log("Youre grad is E");
    
} else {
    console.log("Youre grad is F");
    
}