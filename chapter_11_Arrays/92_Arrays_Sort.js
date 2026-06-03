let fruits=["banana","apple","cherry"]
fruits.sort()
console.log(fruits)

let numbers=[3,1,4]
numbers.sort()
console.log(numbers)

//lexicographic sorting
let arrNum=[10,1,21,2,2]
arrNum.sort()//lexical sorting - sorts by first character
console.log(arrNum)

arrNum.sort((a,b) => a-b);
/*
10-1 = 9 > 0 - b first
10-21= -11 <0 - a first
21-2=19
2-2=0 = 0 - keep order
*/
console.log(arrNum)

/* a-b - >0  - b should come first
   a-b - <0 - a should come first
   a-b - =0 - maintain order 
*/


