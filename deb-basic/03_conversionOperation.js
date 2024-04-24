let score = "33abc";
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

let age = null;

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoginId = 1;

let userLoginId = Boolean(isLoginId);
console.log(typeof userLoginId);
console.log(userLoginId);

// 1 => true, 0 => false
// "" => false
// "deb" => true

let someNumber = 55;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);