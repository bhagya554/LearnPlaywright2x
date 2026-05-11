console.log(greeting);//undefined
var greeting = "Hello";
console.log(greeting);//Hello

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;
console.log(a);//undefined
var a = "bhagya";
console.log(a);