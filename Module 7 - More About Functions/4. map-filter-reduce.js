/**
 * map, filter, reduce
 */

// map
//The map() method in JavaScript creates a new array by applying a callback function to each element of the original array.

let arr= [2, 4, 8, 10]
let updatedArr = arr.map(val=> val+2)
console.log(arr);
console.log(updatedArr);

//filter method


//The filter() method in JavaScript creates a new array containing only the elements that satisfy a condition defined in a callback function.

////Iterates over each element of the array
//Includes elements when the callback returns true

let arr1 = [2, 4, 8, 10];
let updatedArr1= arr.slice().filter(val => val < 5);
console.log(arr1);
console.log(updatedArr1);


// call back fun 
// jab hum ek function ko kisi doosre function ke andar as an argument paas karte hain, toh use callback function kehte hain. Jaise map ya filter mein hum jo arrow function paas karte hain (val => val + 2), wo ek callback hai kyunki map us function ko array ke har element ke liye execute karta hai."
  

// reduce poore array ko nichod (reduce) kar sirf ek single value bana deta hai.
// Jaise kisi D-Mart ka cashier tumhare basket ke 10 items (array) ko scan karke ek single Total Bill (single value) bana deta hai.

let arr = [2, 4, 8, 10];

// Array ka total sum nikalna
let totalSum = arr.reduce((acc, val) => acc + val, 0);

console.log(totalSum); // Output: 24