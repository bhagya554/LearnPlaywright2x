var a=10;
let b=20;
const c=30;

var a=100; // var can be re-declared and updated
a=200; // var can be re-assigned
console.log(a); // 200
// let b=200; // SyntaxError: Identifier 'b' has already been declared
b=300; // let can be re-assigned
console.log(b); // 300

// const c=300; // SyntaxError: Identifier 'c' has already been declared
// c=400; // TypeError: Assignment to constant variable.
console.log(c); // 30

var testcases=["login","logout","signup"]
for(var i=0;i<testcases.length;i++){
    console.log(testcases[i])
}
console.log(`i value:${i}`)

function greet(){
    var s=12;
    console.log(`Inside Function:${s}`)
    if(true){
        s=78
        console.log(`Inside If block:${s}`)
    }
    console.log(`outside if block:${s}`)
}

greet()
