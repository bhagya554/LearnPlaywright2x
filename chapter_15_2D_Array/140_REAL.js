let testMatrix=[
    ["login","pass",200],
    ["checkout","fail",404],
    ["search","pass",180],
]

for(let i=0;i<testMatrix.length;i++){
    for(let j=0;j<testMatrix[i].length;j++)
    {
        console.log(testMatrix[i][j])
    }
    console.log()
}

console.log("Using process.stdout.write")
for(let row of testMatrix){

    for(let cell of row)
    {
        process.stdout.write(cell + " ")
    }
    console.log()
}
console.log()
console.log("Using for each loop")
testMatrix.forEach(row => {
    row.forEach(cell => {
        process.stdout.write(cell + " ")
    })
    console.log()
})