// There are two type of datatypes
      //  1) PRIMITIVE DATATYPES 
              // 7 types of primitive : String , Number , Boolean , null , undefined , symbol , Bigint
// examples are
   const value = 300; 
   let name ="Deb";
   let isLoginId = true;
   let temp = null;
   let fullname;

   let id = Symbol("123");
   const anotherId = Symbol("123");
//    console.log(id === anotherId); // false

   const bigNumber = 34435246426462462n; // Bigint datatypes


      // 2) REFERENCE DATATYPES OR NON_PRIMITIVE DATATYPES
              // Array , Objects , Functions

 // Examples are ----------
 const heros = ["shaktiman" , "captain america" , "doga"]
 let myObj = {
        name:"Debanarayan",
        age:25,
 }

 const myFunction = function(){
        console.log("Hello World");
 }

 console.log(typeof myFunction);  // Function Datatypes
 console.log(typeof temp);        // object Datatypes
 console.log(typeof name);        // string datatypes
 console.log(typeof value);         // number datatypes
 console.log(typeof isLoginId);     // boolean datatypes
 console.log(typeof fullname);   // undefined datatyeps
 console.log(typeof bigNumber);      // bigint datatypes
 console.log(typeof myObj);       // object datatypes
 console.log(typeof myFunction);  // function datatyeps

 // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // Stack(Primitive) , Heap (Non primitive)

//   in stack memory we get copy only 

  let myYoutubename = "debmallick";
  let anothername = myYoutubename;
  anothername = "debstorm";
  console.log(anothername);
  console.log(myYoutubename);

  // in heap memory we get reference value and value also got change.

  let userOne = {
   email: "deb@gmail.com",
   upi: "deb@ybl"
  }
  let userTwo = userOne;
  userTwo.email = "debnarayan@gmail.com";
  userTwo.upi ="8456862474@paytm";
  console.log(userOne);
  console.log(userTwo);