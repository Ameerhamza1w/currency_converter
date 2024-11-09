// inquirer install
import inquirer from "inquirer";
//currency conversions object
let currencyConversion = {
    "PKR": {
        "USD": 0.0036,
        "PKR": 1,
        "GPB": 0.0028,
        "EUR": 0.0033,
        "CAD": 0.0049,
    },
    "GPB": {
        "USD": 1.26,
        "PKR": 350.76,
        "GPB": 1,
        "EUR": 1.17,
        "CAD": 1.72,
    },
    "USD": {
        "USD": 1,
        "PKR": 277.78,
        "GPB": 0.79,
        "EUR": 0.92,
        "CAD": 1.36,
    },
    "EUR": {
        "USD": 1.08,
        "PKR": 301.18,
        "GPB": 0.86,
        "EUR": 1,
        "CAD": 1.47,
    },
    "CAD": {
        "USD": 0.73,
        "PKR": 204.34,
        "GPB": 0.58,
        "EUR": 0.68,
        "CAD": 1,
    },
};
//prompt user for input
const answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "From select your currency",
        choices: ["PKR", "USD", "GPB", "EUR", "CAD"],
    },
    {
        type: "list",
        name: "to",
        message: "To select your converstion rate",
        choices: ["PKR", "USD", "GPB", "EUR", "CAD"],
    },
    {
        type: "number",
        name: "amount",
        message: "Enter the amount you want to convert",
    }
]);
//destructuring user input
const { from, to, amount } = answer;
// perform currency conversion
if (from && to && amount) {
    let result = currencyConversion[from][to] * amount;
    console.log(`you conversion from ${amount} ${from} to ${to} is ${result}`);
}
else {
    console.log("invalid conversion");
}
