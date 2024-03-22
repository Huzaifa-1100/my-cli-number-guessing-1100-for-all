#! /usr/bin/env node
import inquirer from "inquirer";
// Computer will generate random number
const randomNumber = Math.floor(Math.random() * 5 + 1);
console.log(`\nLets plya a number guessing game`);
// User input for guessing number
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number: 1 - 5",
    },
]);
// Compare User input to compute generated number then print the resul
if (answers.userGuessNumber === randomNumber) {
    console.log(`Congragulations! you guessed a correct number`);
}
else {
    console.log(`You guessed wrong number.`);
}
