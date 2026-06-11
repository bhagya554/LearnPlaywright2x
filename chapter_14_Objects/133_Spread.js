const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

obj1.a = 5;

const mix = { ...obj1, ...obj2 }
console.log(mix)

