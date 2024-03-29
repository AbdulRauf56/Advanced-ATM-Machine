#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Starting with Username and Pincode.
let totalBalance = 12000;
let Pin = 3579;
// Printing a Welcome message.
console.log(chalk.blue("\n \tWelcome to Abdul Rauf ATM Machine.\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your PinCode:")
    }
]);
if (pinAnswer.pin === Pin) {
    console.log(chalk.green("\nCorrect PinCode! Account Unlocked Successfully.\n"));
    // console.log(`Your Account Balance is ${totalBalance}`)
    let atmAnswer = await inquirer.prompt([
        {
            name: "atm",
            type: "list",
            message: "Select Your Option:",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (atmAnswer.atm === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select your Withdrawl Method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Select Amount:",
                    choices: [1000, 2000, 5000, 10000, 12000, 15000, 20000, 50000]
                }
            ]);
            if (fastCashAns.fastCash > totalBalance) {
                console.log(chalk.red("Insufficient Balance!"));
            }
            else {
                totalBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw Successfully!`);
                console.log(`Your Remaining Balance is: ${totalBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter amount to withdraw:"
                }
            ]);
            if (amountAns.amount > totalBalance) {
                console.log(chalk.red("Insufficient Balance!"));
            }
            else {
                totalBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfully!`);
                console.log(`Your Remaining Balance is: ${totalBalance}`);
            }
        }
    }
    else if (atmAnswer.atm === "Check Balance") {
        console.log(`Your Account Balance is: ${totalBalance}`);
    }
}
