let arr = [1, 2, 3, 4, 5]
//slice(start,end)- returns new array - does not mutate actual array - (start,end-1)
//console.log(arr.slice(1,3))//[2,3] - (start,end-1)

//console.log(arr.slice(2,4)) //[3,4]

console.log(arr.slice(2, 5))//[3,4,5]

console.log(arr.slice(2))//[3,4,5] -  we get everything from index 2 to the end

console.log(arr.slice(-2)) // [4,5] - from right index are -1,-2,-3.... it goes from -2 to end towards right

console.log(arr.slice(0))//[1,2,3,4,5]
arr.splice(1, 2, 23, 45)//[1,23,45,4,5]
console.log(arr)

/*
Difference between splice and slice
splice                                  | slice
[mutates] original array                | Does not modify original array
[Returns] removed elements              | new array
[args] (start,deleteCount,itemsToInsert)| (start,end) - end exclusive     
*/
console.log("****Slice Example***")
let arrNum=[10,20,30,40,50]
let s1=arrNum.slice(1,4)
console.log(arrNum)
console.log(s1)

console.log("****Splice Example*****")
let s2=arrNum.splice(1,2,45,67)
console.log(arrNum)
console.log(s2)