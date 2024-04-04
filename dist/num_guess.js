#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userRandomNumber",
        type: "number",
        message: "Please Guess a Number between 0 - 10",
    },
]);
if (answers.userRandomNumber === randomNumber) {
    console.log("Number is Match");
}
else {
    console.log("Number is not Matched ");
}
// console.log(answers);
