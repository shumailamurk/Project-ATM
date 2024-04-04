#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance = 10000;

let myPin = 1234;

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pincode",
        type: "number"
    }
]);

if (pinAnswer.pin === myPin) {
    console.log("correct pincode!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "please select one",
            type: "list",
            choices: ["withdraw", "fast cash", "check Balance"]
        }
    ]);

    if (operationAns.operations === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);

        myBalance -= amountAns.amount;

        if (myBalance >= 0) {
            console.log(`The remaining balance is ${myBalance}`);
        } else {
            console.log("Your balance is insufficient");
        }
    } else if (operationAns.operations === "fast cash") {
        let fastcashAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Please select amount",
                type: "list",
                choices: [1000, 3000, 7000, 5000]
            }
        ]);

        let selectedAmount = fastcashAns.amount;

        myBalance -= selectedAmount;

        if (myBalance >= 0) {
            console.log(`The remaining balance is ${myBalance}`);
        } else {
            console.log("Your balance is insufficient");
        }
    }
} else {
    console.log(`incorrect pincode!!!`);
}
