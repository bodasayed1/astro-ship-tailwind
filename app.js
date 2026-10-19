let score = 50;

if (score < 0 || score > 100) {
  console.log ("درجة غير صحيحة");
} else if (score >= 85) {
  console.log ("ممتاز");
} else if (score >= 75) {
  console.log ("جيد جدا");
} else if (score >= 65) {
  console.log ("جيد");
} else if (score >= 50) {
  console.log ("مقبول");
} else {
  console.log( "راسب");
}

// second task
let drinkCode = 3;

switch (drinkCode) {
  case 1:
    console.log("طلبك: قهوة - السعر: 15 جنيه");
    break;
  case 2:
    console.log("طلبك: شاي - السعر: 10 جنيه");
    break;
  case 3:
    console.log("طلبك: عصير برتقال - السعر: 20 جنيه");
    break;
  case 4:
    console.log("طلبك: مياه - السعر: 5 جنيه");
    break;
  default:
    console.log("اختيار غير موجود");
}

// third taskk

let distance = 1000;
let total = 0;
for (let i = 0; i < 7; i++) {
  distance >= 3000
    ? console.log("Day " + (i + 1) + " " + distance + " M (Hard day)")
    : console.log("Day " + (i + 1) + " " + distance + " M");
    total += distance;
    distance += 500;
}
console.log("Total distance = " + total +" M");




// fourth task

let price = 1000;
let savings = 0;
let weeks = 0;
while (savings < price) {
  savings+=150
  weeks++
  console.log("Week: "+ weeks + " and, You have: " +savings+ " Pounds")
}
console.log("You achieved you goal within " + weeks+" Weeks, And you have: " + savings +" Pounds")


// last task
const correctPin = "1234";
let balance = 2000;
let pinAttempts = ["1111", "2580", "1234"];

let operation = "withdraw"; 
let amount = 500;