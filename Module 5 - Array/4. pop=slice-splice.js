/**
 * pop, slice, splice 🌟🌟
 */

// let courses = ["html", "css", "js", "jqyery", "vue.js", "angular"];

//  courses.splice(3, 0, "reactjs");
// splice(startIndex, deleteCount, itemToInsert)
// 1st (3): Index kahan se start karna hai
// 2nd (0): Kitne items delete karne hain (0 = bas insert karo, delete nahi)
// 3rd ("reactjs"): Naya data jo us index par daalna hai
// console.log(courses);

// courses.splice(3, 2, "reactjs")
// console.log(courses);


// diff b/w slice and s splice
// splice original array ko modify (mutate) kar deta hai, jaise is code mein usne actual courses array ko hi badal diya. Lekin slice original array ko bilkul nahi chhedta, wo bas array ka ek tukda (copy) nikal kar humein de deta hai."











  let courses = ["html", "css", "js", "reactjs", "jquery"];

  let value = courses.slice(0, 4);  //Starting index is inclusive, and ending index is exclusive.  in slice
//  console.log(courses)
 console.log(value);

 let userName = "PRAKASH";

 let firstUpperCaseChar = userName[0].toUpperCase();
 let capitalizeName = firstUpperCaseChar + userName.slice(1).toLowerCase();

 console.log(capitalizeName);












// console.log("Courses -", courses);
// let removedItem = courses.pop();
// console.log("RI -", removedItem);
// console.log("Updated Courses -", courses);

// removedItem = courses.pop();
// console.log("RI Again -", removedItem);
// console.log("Updated Courses Again -", courses);