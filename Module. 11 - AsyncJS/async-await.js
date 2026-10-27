/**
 * async await
 */

// let promise = new Promise((resolve) => resolve("done"));
// promise.then((res) => console.log(res)).catch((err) => console.log(err));
 
const getUserData = async() =>{
  try {
    // 🛑 PAUSE 1: Server tak gaye aur response aane ka wait kiya
    const promise = await fetch("https://mockdata.prakashsakari.repl.co/users");
    // 🛑 PAUSE 2: Data aa gaya, par wo kachha (raw) hai. 
    // Us kachhe data kgetUserData = async () o padhne laayak JSON mein convert hone ka wait kiya.
    const response = await promise.json(); 
    
    console.log(response); // Sab theek raha toh data print hoga
  } catch (err) {
    console.log(err); // Agar internet nahi hai ya URL galat hai, toh yahan aayega
  }
};
getUserData() ;



async function showResponse() {
  try {
    // Tumne khud ek Promise banaya jo jaan-boojh kar Reject (fail) ho raha hai
    let promise = new Promise((res, rej) => rej("promise rejected"));
    let result = await promise; // function execution stop her until the promise is settled
    console.log(result); // Yeh line KABHI nahi chalegi, kyunki upar error aa gaya.
  } catch (err) {
    console.log("Error Occured::", err);
  }
}

 showResponse();
