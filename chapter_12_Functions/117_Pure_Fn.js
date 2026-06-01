//Pure Function
//Pure Fn return same output for same input, and no side effects 

// ✅ Pure — no side effects, predictable output
function calculatePassRate(total,passed){
    return ((passed/total)*100).toFixed(2)
}

console.log(calculatePassRate(10,7))
console.log(calculatePassRate(10,7))

// ❌ Impure — depends on external state
function isPassing(score){
    return score>= threshold; //depends on external variable
}

let threshold=70;
console.log(isPassing(70))

threshold=50;
console.log(isPassing(70))