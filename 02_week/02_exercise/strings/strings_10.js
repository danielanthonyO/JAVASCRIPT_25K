/* Create a variable messyString and assign it the value " Clean me up! ".
Use .trim() to remove the extra spaces at the beginning and end of the string.
Print the cleaned-up string using console.log().
Example output:
"Cleaned string: Clean me up!"
 */

// solution
let messyString = " Clean me up! ";
console.log(messyString);
let removeSpace = messyString.trim();
console.log(`Cleaned string: ${messyString}!`);
console.log(`Cleaned string: ${removeSpace}!`);