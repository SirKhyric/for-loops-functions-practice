
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  // Your code goes here...
  let sum = 0;

  for (let i = 0; i < array.length; i += 1) {
    sum += array[i] / 4;
  }
  return sum;
}
console.log(getAverage([22, 45, 4, 65]));

/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  // Your code goes here...
  var sumthn = 0;

  for (let i = 0; i < str.length; i ++) {
    if (!isNaN(parseInt(str[i]))) {
      sumthn += parseInt(str[i]);
    }
  }
  return sumthn;
}
console.log(getStringSum("GH2U87A"));

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
