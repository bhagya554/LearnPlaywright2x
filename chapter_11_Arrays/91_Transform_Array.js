let scores=[45,82,91,60,73]
//map - transforms each element and returns a new array
let grades=scores.map((s)=>s>70 ?"pass":"fail")
console.log(grades)


//filter - keeps elements which only satisfy the condition(only elements which pass a test)
let passGrades=scores.filter(s=>s>70)
console.log(passGrades)

//reduce - accumulates to a single value
//5 is initial value
// a is accumulator - running sum
// b is current value

/*
initial = 5 , a=5,b=45 -> 50
a=50,b=82 -> 132
a=132,b=91 ->223
a=223,b=60 -> 283
a=283,b=73 -> 356
*/
let total=scores.reduce((a,b)=>(a+b),5)
console.log(total)


//Here default initial value is Zero(0) - below line is same as :
// scores.reduce((a,b)=>a+b,0)
let sum=scores.reduce((a,b)=>a+b)//351
let percentage=(sum/500)*100;
console.log(percentage)

//flat - flattens nested array
let nested=[[1,2],[3],[4,5]]
console.log(nested.flat())