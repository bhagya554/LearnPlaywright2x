const user={
    name:"John",
    age:30,
    "email id":"john@example.com"
}

console.log(user)
console.log(user.name)
console.log(user["age"])


const ageVal="age"
console.log(user[ageVal])

const emailKey="email id"
console.log(user[emailKey])

user.city="NYE"
user.age=56

console.log(user)

let obj1={name:"Login"}
console.log(Object.getOwnPropertyDescriptor(obj1,"name"))

// {
    // value: 'Login',
    // writable: true,
    // enumerable: true,
    // configurable: true
//   }