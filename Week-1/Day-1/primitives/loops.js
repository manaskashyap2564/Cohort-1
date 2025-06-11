// Loops

//  1. for loop – Count karne wala loop
console.log(users[0])
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

// 2. while loop – Jab tak condition true hai, tab tak repeat
var i = 0 
while (i<5) {
    console.log(i)
    i++;
}

//  3. do...while – Kam se kam ek baar toh chalega
let i = 1;
do {
  console.log("Do while round: " + i);
  i++;
} while (i <= 5);
let fruits = ["Apple", "Banana", "Mango"];

// 4. for...of – Arrays ke liye shortcut
for (let fruit of fruits) {
  console.log("Fruit: " + fruit);
}
let person = {
  name: "Manas",
  age: 21,
  city: "Ballia"
};

// 5. for...in – Object ke keys ke liye
for (let key in person) {
  console.log(key + ": " + person[key]);
}





