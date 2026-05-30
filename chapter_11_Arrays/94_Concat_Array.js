let a=[1,2]
let b=[3,4]
//let c=a+b//[1,23,4]
console.log("******Using Concat*****")
let c=a.concat(b)//[1,2,3,4]
console.log(c)

//spread - modern way of concatenation
console.log("******Using Spread*****")
let d = [...a,...b]
console.log(d)

//join using some common string
console.log("******Using Join*****")
let s=["pass","fail","skip"].join(" | ")
console.log(s)//pass|fail|skip


