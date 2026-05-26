let tests=["login","checkout","search"]
console.log("------simple for loop with index-----------")
for(let i=0;i<tests.length;i++){
    console.log(tests[i]);
}

console.log("--------Using for of -------")
for(test of tests){
    console.log(test)
}

console.log("--------Using for each-------")
tests.forEach((value,index)=>{
    console.log(value + "----" + index)
})



let students=["methis","senthils","ajay","rahul"]
console.log("--------Using for .. in-------")
for(let stu in students){ //in == index
    console.log(stu, "--->",students[stu])
}