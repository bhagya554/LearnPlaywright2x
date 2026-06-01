function add(...nums){
    return nums.reduce((a,b) => a+b,0)
}
const num=[1,2,3,4,7]
console.log(add(...num))


let responseCodes=[200,201,300,500]
function hasError(...codes){
    if(codes.some(c => c>=400)){
        return `error present`
    }
    else{
        return `no error`
    }
}

console.log(hasError(...responseCodes))