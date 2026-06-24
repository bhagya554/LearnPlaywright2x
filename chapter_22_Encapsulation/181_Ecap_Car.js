const { setEngine } = require("node:crypto");

class Car{
    #engine

    constructor(name,engineName){
        this.name=name;
        this.#engine=engineName;
    }

    getEngine(){
        return this.#engine
    }

    setEngine(newEngineName){
        this.#engine=newEngineName;
    }
}

let tesla=new Car("Tesla","v8")
console.log(tesla.getEngine())
tesla.setEngine("v9")
console.log(tesla.getEngine())