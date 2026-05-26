let status=["pass","fail","skip"]
console.log(status[0])

console.log(status.at(-1))
console.log(status.at(-2))
console.log(status.at(-3))
console.log(status.at(-4))

//modify
status[1]='blocked'
console.log(status)