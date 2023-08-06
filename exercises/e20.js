
// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.
var listOfNames = ["jon", "alice", "andrew", "mark", "jimmy"];


export function separateNamesWithAFromRest(array) {
  // Your code goes here...
  const namesWith = [];
  const namesWithout = [];

  for (var i = 0; i < array.length; i++) {
    const name = array[i];
    let hasAnA = false;

    for (var j = 0; j < name.length; j++) {
      if (name[j] === 'a') {
        hasAnA = true;
      }
    }

    if (hasAnA) {
      namesWith.push(name);
    } else {
      namesWithout.push(name);
    }
  }

  return [namesWith, namesWithout];
}
console.log(separateNamesWithAFromRest(listOfNames));


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function


