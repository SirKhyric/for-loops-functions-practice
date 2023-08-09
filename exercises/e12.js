
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]


export function getAllDepositsGreaterThanOneHundred(bankAccounts) {
  // Your code goes here...
  const depositsGreaterThanHundred = [];

  for (let i = 0; i < bankAccounts.length; i++) {
    let account = bankAccounts[i];
    if (account.deposits) {
      for (let j = 0; j < account.deposits.length; j++) {
        let deposit = account.deposits[j];
        if (deposit > 100) {
          depositsGreaterThanHundred.push(deposit);
        }
      }
    }
  }
  return depositsGreaterThanHundred;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


