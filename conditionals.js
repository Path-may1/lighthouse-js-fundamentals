const raining = true;
const cold = true;

if (raining) {
    console.log("Dont forget your umbrella!")
}

if (cold) {
    console.log("Make sure you pick out scarf!");
}

console.log("Now you're ready to go outside!")

const temperature = 20;

if (temperature < 0) {
    console.log(" Make sure you pick out a scarf!");
} else if (temperature < 15) {
    console.log("Short sleeves won't cut it!");
} else {
    console.log("Short sleeves are fine")
}
console.log(" Now you're ready to go outside!")

// more examples of if Logical operators

const isCitizen = true;
const age = 26;

if(isCitizen && age > 18){
    console.log( "You are eligible to vote");
}

temperature1 = 35;

if (temperature1 < -40 || temperature1 > 40) {
    console.log("Not a good idea to go outside!")
} else {
    console.log("You can go out and enjoy you walk")
}