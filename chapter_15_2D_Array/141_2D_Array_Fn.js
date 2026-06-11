let scores=[
    [85,95,78],
    [60,45,70],
    [95,88,92],
]

let rowSum=scores.map(row=>row.reduce((a,b)=>a+b,0))
console.log(rowSum)