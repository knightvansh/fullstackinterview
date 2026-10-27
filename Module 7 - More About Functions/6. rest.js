/**
 * REST parameter --> ...rest/...args
 * The rest parameter (...) allows a function to accept any number of arguments and collect them into a single array, making functions more flexible and dynamic.

Represented using three dots (...) followed by a parameter name
Collects multiple arguments into an array
Must always be the last parameter in a function
Useful for handling variable or unknown numbers of arguments
Simplifies function definitions compared to the arguments object
 * 
 */

function calculateTotal(...rest) {
  let total = 0;
  for (let value of rest) {
    total += value;
  }
  console.log(total);
}

calculateTotal(4, 5, 6, 7, 8, 9, 1, 2, 3, 3);
