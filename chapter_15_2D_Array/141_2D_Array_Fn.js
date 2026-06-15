let scores=[
    [85,95,78],
    [60,45,70],
    [95,88,92],
]

let rowSum=scores.map(row => row.reduce((a,b) => a+b,0))
console.log(rowSum)//[ 258, 175, 275 ] - 1D array of row sums

let arr2=[2,3,4]
let applyMap=arr2.map(a=>a*20)
console.log(applyMap)


let suiteResults=[
    ["login-pass","register-pass","logout-pass"],
    ["search-pass","filter-fail","sort-pass"],
    ["checkout-fail","payment-fail","confirm-pass"]
]
//includes() checks if something exists inside a string/array
console.log("return failed tests")
for(let row=0;row<suiteResults.length;row++){
    for(let cell=0;cell<suiteResults[row].length;cell++){
        if(suiteResults[row][cell].includes('fail')){
            console.log(suiteResults[row][cell])
        }
    }
}

let array_2d=[
    [1,2,3],
    [4,5]
    [6]
]

let count=1;
for(let row = 1;row<=3;row++){
    for(let col=3;col>=row;col--){
        process.stdout.write(count + " ")
        count++;
    }
    console.log()
}