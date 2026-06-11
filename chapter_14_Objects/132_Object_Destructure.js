const user={name1:"John",age:30,city:"NYC"}

//Basic destructuring
const {name1,age}=user
//const {age,name1}=user - if you change order as well it works
console.log(name1)
console.log(age)
let city=user.city
console.log(city)

/*
Because:

Left side { name1, age } → tells what keys you want
Right side user → tells from where to take
JavaScript matches them by name

✅ Important Rule
This works only if names match:
const { name1 } = user; ✔ Works
const { name } = user; //key is name1, not name-  ❌ Wrong:
*/

/*
same applies in : 
import { test, expect } from '@playwright/test';

just used with modules instead of objects.


Key Difference
----------------
Object destructuring   |    Import destructuring
---------------------------------------------------------
Works on objects       |    Works on modules
Uses =                 |    Uses import
Happens at runtime     |    Happens at load time
*/



//We can rename the keys(variables) as well 
console.log("rename variables")
console.log("----------")
const {name1:userName,age:userAge}=user
console.log(userName)
console.log(userAge)

//Assigning Default value
console.log("Assigning default value")
console.log("------------")
const {country="Newze land"}=user
console.log(country)
console.log(user) //{ name1: 'John', age: 30, city: 'NYC' }

//If you WANT country inside the object
//Create a new object (better practice)

const updatedUser = { ...user, country: "Newze land" };
console.log(updatedUser);


//SyntaxError: Identifier 'city' has already been declared
//when we try to assign default value to already declared identifier(variable) - it gives above error
//const {city="Tokyo"}=user
//console.log(city)

const data={
    user : {
        name: "John",
        address: {
            city:"NYC"
        }
    }
}
console.log(data.user)//{ name: 'John', address: { city: 'NYC' } }
console.log(data.user.address)//{ city: 'NYC' }
console.log(data.user.address.city)//NYC