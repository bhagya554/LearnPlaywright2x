function runTest(name,status,duration){
    return `${name}:${status} (${duration}ms)`
}

const r=runTest("login test","pass",2000)
console.log(r)