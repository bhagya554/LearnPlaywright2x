//Primitive Vs Reference Types

console.log("primitive types does not follow copy by reference")
console.log("Primitive types - number,string,boolean,null,undefined")
let a = 10
let b = a;
b = 99;
console.log(a)
console.log(b)


console.log("Objects - follow copy by reference")
console.log("Copy by reference is applicable on - objects,array,function")
//Objects - copied by reference, call by ref
let obj1 = { name: 'giri' }
let obj2 = obj1
console.log(obj1.name)
console.log(obj2.name)
obj2.name = 'sana'
console.log(obj1.name)
console.log(obj2.name)

