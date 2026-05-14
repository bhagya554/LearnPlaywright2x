//let and const is Block-scope
let x="global"
if(true){
    //TDZ starts here
    //console.log(x)  //reference error
    let x="hello"
    console.log(x)  //hello
    x='block'  
    console.log(x)  //block   
}

console.log(x)//global