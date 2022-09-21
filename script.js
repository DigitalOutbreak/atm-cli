// 1. Ask for account
// 2. If account does not exist ask to create account
// 3. Ask what they want to do
// 4. Execute command
// a. View
// b. Withdraw (Subtract)
// c. Deposit (Add)

// Account Object

const Account = require("./Account");
const readline = require("readline");
const CommandLine = require("./CommandLine");

async function main() {
  const accountName = await CommandLine.ask("Which account would you like to access?");
}

main();
