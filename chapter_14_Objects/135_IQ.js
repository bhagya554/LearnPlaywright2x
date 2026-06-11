const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

const user = { name: "John", age: 12 }
for (const key of Object.keys(user)) {
    console.log(`${key}:${user[key]}`)
}

for (const key in user) {
    console.log(`${key}:${user[key]}`)
}

const arr1 = [12, 34]
for (const a of arr1) {//a will return values - 12,34
    console.log(arr1)
}
for (const a in arr1) {//a will return index - 0,1
    console.log(arr1[a])
}

const emp1 = {
    name: "giri",
    id: 345
}
for (const key of Object.keys(emp1)) {//key returns "name","id"
    console.log(`Key: ${key} --- Value: ${emp1[key]}`)
}

for (const key in emp1) {//key returns "name","id"
    console.log(`Key: ${key} --- Value: ${emp1[key]}`)
}
/* Arrays
for...in → index
for...of → value


Objects
for...in → keys
for...of → need Object.keys()


for...in user               keys → "name", "age"
for..of Object.keys(user)   keys → "name", "age"
*/

const emp2 = {
    name: "mohan",
    id: 267
}
console.log("Using for each - only keys")
Object.keys(emp2).forEach(key => {
    console.log(`${key} - ${emp2[key]}`)
})

console.log("Using for each - entries")
Object.entries(emp2).forEach(([key, value]) => {
    console.log(`${key} - ${value}`)
})