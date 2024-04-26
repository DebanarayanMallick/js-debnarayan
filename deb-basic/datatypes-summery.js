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
   let anotherId = Symbol("123");
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

 console.log(typeof temp);