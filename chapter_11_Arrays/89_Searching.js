let arrayA=[23,45,12,23,67,45]
//indexOf - returns first index, or -1 if not found
console.log(arrayA.indexOf(45))//1

//lastIndexOf - searches from end
console.log(arrayA.lastIndexOf(45))//

console.log(arrayA.indexOf(100))//-1


//includes - returns boolean
console.log(arrayA.includes(67))//true
console.log(arrayA.includes(670))//false

//find - returns first matching element
let nums=[10,25,30,45]
console.log(nums.find(x => x>20))//25

//findIndex - returns first index where the matching element is found
console.log(nums.findIndex(x => x>25))//2

//findLast - returns last matching element
console.log(nums.findLast(x=>x>20))//45
console.log(nums.findLastIndex(x=>x>20))//3

