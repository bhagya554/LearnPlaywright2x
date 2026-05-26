let scores=[45,82,91,60,73]
//map - transforms each element and returns a new array
let grades=scores.map((s)=>s>70 ?"pass":"fail")
console.log(grades)


//filter - keeps elements which only satisfy the condition(only elements which pass a test)
let passGrades=scores.filter(s=>s>70)
console.log(passGrades)

//reduce - accumulates to a single value
let total=scores.reduce((a,b)=>(a+b),5)//adds all values+5 - 351 + 5 = 356
console.log(total)

let sum=scores.reduce((a,b)=>a+b)//351
let percentage=(sum/500)*100;
console.log(percentage)

//flat - flattens nested array
let nested=[[1,2],[3],[4,5]]
console.log(nested.flat())