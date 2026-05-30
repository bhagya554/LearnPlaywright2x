//isArray() - Checking if something is an array??
let result=Array.isArray([1,2,3])
console.log(result)

let result1 = Array.isArray("a")
console.log(result1)


//every and some
console.log("***Every****")
let s = [80,90,89].every(a => a>=70)//all shoukd satisfy - true
console.log(s)
s=[56,78,80].every(a=>a>70)
console.log(s)


console.log("***Some****")
let s2 = [80,60,85].some(a => a<70)//atleast 1 should satisfy
let s3= [80,90,85].some(a => a<70) 
console.log(s2)
console.log(s3)

//Playwright API
let result2=[200,201,204].every((statusCode) => statusCode >=200 && statusCode <300)
console.log(result2)

