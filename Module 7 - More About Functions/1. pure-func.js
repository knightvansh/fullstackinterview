/**
 * Pure Function 💖💖
 * 1. It takes an argument
 * 2. It should return something
 * 3. For same input you should get the same output
 * 4. The result should not be influenced by outer parameter
 * 5. It should not mutate the original argument
 */

 const x = 5;

function getDoubleValue(number){
   return number * 2 * x;
}

 const ans = getDoubleValue(5);
 console.log(ans);


function appendNumbers(arr){
    let newArr = [];
    newArr.push(...arr, 5, 6);
    return newArr;
}

const result = appendNumbers([1, 2, 3, 4]);
console.log(result)