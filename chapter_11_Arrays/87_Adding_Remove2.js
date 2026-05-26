let arr=[1,2,3]
arr.push(4,5,6)
console.log(arr)

//splice(starting index from which ele to be removed, count of elements to be removed,)
// arr.splice(1,2)
// console.log(arr) //[ 1, 4, 5, 6 ]

// arr.splice(2,0,99)
// console.log(arr) //[1, 2, 99, 3, 4, 5,  6]

let arr2=[20,30,100,50,60]
arr2.splice(2,1,40)
console.log(arr2) // [ 20, 30, 40, 50, 60 ]


console.log(arr)
arr.splice(1,2,20,30)
console.log(arr)