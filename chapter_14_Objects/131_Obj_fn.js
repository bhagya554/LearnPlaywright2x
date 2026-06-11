const calculator=
{
    a:12,
    b:3,
    add(){
        return this.a+this.b
    },
    sub(){
        return this.a-this.b
    },
    div(){
        return this.a/this.b
    },
    mul(){
        return this.a*this.b
    }
}

console.log(calculator.add())
console.log(calculator.sub())
console.log(calculator.div())
console.log(calculator.mul())


const verifyPrime={
    n:18,
    isPrime(){
        for(let i=2;i<this.n/2;i++){
            if(this.n%i===0){
                return "Not Prime"
            }
        }
        return "Prime"
    }
}

console.log(verifyPrime.isPrime())


