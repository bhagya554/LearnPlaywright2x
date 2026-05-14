// null vs undefined

// ---------- undefined ----------
// A variable that has been declared but NOT assigned a value
let a;
console.log(a); // undefined

// Accessing a non-existent object property
const obj = { name: "Alice" };
console.log(obj.age); // undefined

// Function that returns nothing explicitly
function doNothing() {}
console.log(doNothing()); // undefined

// Function parameter not provided
function greet(name) {
  console.log(name);
}
greet(); // undefined

// ---------- null ----------
// null is explicitly assigned to represent "no value" or "empty"
let b = null;
console.log(b); // null

// Often used to reset or clear a value
let user = { name: "Bob" };
user = null; // explicitly clearing the reference
console.log(user); // null

// ---------- typeof ----------
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical JS bug)

// ---------- comparison ----------
console.log(null == undefined);  // true (loose equality)
console.log(null === undefined); // false (strict equality - different types)
