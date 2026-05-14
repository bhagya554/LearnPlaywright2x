let name = "Bhagya"

let single = 'Hello ' + name + ', welcome'
let double = "Hello " + name + ", welcome"
let backtick = `Hello ${name}, welcome`

console.log("Single quote:", single)
console.log("Double quote:", double)
console.log("Backtick:", backtick)

let multiLineSingle = 'Line 1\nLine 2'
let multiLineDouble = "Line 1\nLine 2"
let multiLineBacktick = `Line 1
Line 2`

console.log("Multi-line single:", multiLineSingle)
console.log("Multi-line double:", multiLineDouble)
console.log("Multi-line backtick:", multiLineBacktick)

let expr = `Sum of 5 + 3 = ${5 + 3}`
console.log(expr)

let singleInside = 'She said "Hello"'
let doubleInside = "It's a nice day"
let backtickInside = `He said "It's fun"`
console.log(singleInside, doubleInside, backtickInside)
