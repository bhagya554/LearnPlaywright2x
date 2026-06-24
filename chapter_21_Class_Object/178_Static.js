class person{
    static nationality="Indian"
    constructor(name){
        this.name=name
    }
}

const p1 = new person("jaasritha")
console.log("Hi, I am",p1.name +" and nationality is",person.nationality)