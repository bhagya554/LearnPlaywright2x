let student1={name:"Amit",age:65}
let student2={name:"Pramod"}
let student3={name:"Raj",age:87,phone:3746327467};

//key will not be in double quotes
//below key in double quote in JSON

let JSON_Student4={"name":"Raj","age":87,"phone":3746327467};


let a={status:"pass"};
console.log(a.status);//pass
console.log(a["status"]);//pass

let b=a
b.status="fail"//copy by reference ,a.status also gets changed.
console.log(a.status)//fail
console.log(b.status)//fail

if(a===b){
    console.log(true)
}
else{
    console.log("false")
}