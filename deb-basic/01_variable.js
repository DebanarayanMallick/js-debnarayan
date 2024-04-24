const accountId = 23456   
let accountEmail = "deb@gmail.com"
var accountPassword = "12345"
 accountCity ="Odisha"
 let accountState;

// accountId = 3  // not allowed
 console.log(accountId);

 accountEmail = "d@gmail.com"
 accountPassword = "54321"
 accountCity = "banglore"

 console.table([accountId , accountEmail , accountPassword , accountCity , accountState]);

 /*
 prefer not to use var
 because of issue in block scope and functional scope
 */