// EXERCISE 6
// Return an array of bank account holders' names with a balance of 0
// Array example: bankAccounts in /data/data.js
// getClientWithNoMoney(bankAccounts) => ['Kevin', 'Jon']

var arrayArea = [
  {name: 'Susan', balance: 100.32},
  {name: 'Morgan', balance: 1100.32},
  {name: 'Joshua', balance: 18456.57},
  {name: 'Candy', balance: 0},
  {name: 'Phil', balance: 18},
];


export function getClientWithNoMoney(array) {
  // Your code goes here...
  var theAnswer = [];
  
  for (var i = 0; i < array.length; i++) {
    if (arrayArea[i].balance === 0) {
      theAnswer.push(arrayArea[i].name);
    }
  }
  return theAnswer;
}
console.log(getClientWithNoMoney(arrayArea));
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-6"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function



