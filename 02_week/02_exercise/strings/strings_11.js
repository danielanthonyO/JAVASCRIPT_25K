/* Create a variable phrase and assign it the value "JavaScript is versatile and powerful."
Use .includes() to check if the string contains the word "powerful".
Print the result using console.log().
Example output:
"Does the phrase include 'powerful'? true"
 */

// solution
let phrase = "JavaScript is versatile and powerful.";
let result = phrase.includes('powerful');
console.log(result);
console.log(`Does the phrase include 'powerful'? ${result}`);