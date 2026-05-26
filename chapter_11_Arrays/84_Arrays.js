//creating array
let browser=["Chrome","Firefox","Safari"]

//Array Constructor
let scores=new Array(3)
scores[0]=90;
scores[1]=67;
scores[2]=23;
let scores2=new Array(1,2,3)
console.log(scores)
console.log(scores2)

let numbers=new Array(100,200,300,400);
console.log(numbers)

let test=Array.of(10,20,30,40,50)
console.log(test)

//Array.from
let chars=Array.from('hello')
console.log(chars)//[ 'h', 'e', 'l', 'l', 'o' ]

// let nums=Array.from('23232')
// console.log(nums)//[ '2', '3', '2', '3', '2' ]