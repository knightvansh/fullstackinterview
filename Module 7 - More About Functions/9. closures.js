/**
 * A closure is the combination of a function bundled together with references to its lexical environment.
 *
 * In other words, A closure is a function that remembers its outer variables and can access them
 */

function x() {
  var a = 5;
  function y() {
    console.log(a);
    var a = 7;
  }
  y();
}

x();



/* 
   ========================================================
   🔥 CLOSURE vs HOISTING (Interview Cheat Sheet) 🔥
   ========================================================
   
   ONE-LINE DIFFERENCE:
   - HOISTING: Variable ko declare hone se pehle use karna (JS declaration ko top par utha deta hai).
   - CLOSURE: Inner function ka apne outer (parent) function ke variables ko yaad rakhna aur access karna.
*/

// ========================================================
// EXAMPLE 1: THE TRAP (Hoisting test - Tumhara wala code)
// ========================================================

function hoistingTest() {
    var a = 5;
    
    function y() {
      console.log(a); // ⚠️ Output: undefined
      
      // KYA HUA YAHAN? (Hoisting)
      // JS ne is 'var a' ko function 'y' ke top par "Hoist" (shift) kar diya.
      // JS isko aise padh raha hai: 
      // var a; 
      // console.log(a);  <-- Value nahi mili, isliye undefined.
      // a = 7;
      var a = 7; 
    }
    
    y();
  }
  
  hoistingTest();
  
  
  // ========================================================
  // EXAMPLE 2: THE REAL MAGIC (Asli Closure)
  // ========================================================
  
  function closureTest() {
    var a = 5; // Parent variable
    
    function y() {
      // Yahan andar humne koi naya 'a' declare NAHI kiya hai
      console.log(a); // ✅ Output: 5
      
      // KYA HUA YAHAN? (Closure)
      // Function 'y' ne apna "Closure Backpack" check kiya.
      // Usko apne parent function mein 'a = 5' mil gaya, 
      // toh usne seedha wahi print kar diya.
    }
    
    y();
  }
  
  closureTest();
